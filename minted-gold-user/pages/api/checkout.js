// pages/api/checkout.js
import { PrismaClient } from '@prisma/client';
const stripe = require('stripe')(process.env.STRIPE_SK);

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    if (req.method !== 'POST') {
      res.status(400).json({ error: 'Invalid request method' });
      return;
    }

    const {
      name, email, city,
      postalCode, streetAddress, country,
      cartProducts,
    } = req.body;

    const uniqueIds = [...new Set(cartProducts)];
    const productsInfos = await prisma.product.findMany({
      where: {
        id: { in: uniqueIds },
      },
    });

    let line_items = [];
    for (const productId of uniqueIds) {
      const productInfo = productsInfos.find((p) => p.id === productId);
      const quantity = cartProducts.filter((id) => id === productId)?.length || 0;
      if (quantity > 0 && productInfo) {
        line_items.push({
          quantity,
          price_data: {
            currency: 'USD',
            product_data: { name: productInfo.title },
            unit_amount: quantity * productInfo.price * 100,
          },
        });
      }
    }

    const orderDoc = await prisma.order.create({
      data: {
        line_items,
        name,
        email,
        city,
        postalCode,
        streetAddress,
        country,
        paid: false,
      },
    });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      customer_email: email,
      success_url: process.env.PUBLIC_URL + '/cart?success=1',
      cancel_url: process.env.PUBLIC_URL + '/cart?canceled=1',
      metadata: { orderId: orderDoc.id.toString(), test: 'ok' },
    });

    res.json({
      url: session.url,
    });
  } catch (error) {
    console.error('Error in checkout:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
