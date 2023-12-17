import { PrismaClient } from '@prisma/client';
const stripe = require('stripe')(process.env.STRIPE_SK);
import {buffer} from 'micro';

const prisma = new PrismaClient();
const endpointSecret = "whsec_634d3142fd2755bd61adaef74ce0504bd2044848c8aac301ffdb56339a0ca78d";

export default async function handler(req, res) {
  // Use Prisma for database connection
  try {
    const sig = req.headers['stripe-signature'];

    let event;

    try {
      event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
    } catch (err) {
      res.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case 'checkout.session.completed':
        const data = event.data.object;
        const orderId = data.metadata.orderId;
        const paid = data.payment_status === 'paid';
        if (orderId && paid) {
          // Use Prisma to update the order
          await prisma.order.update({
            where: { id: orderId },
            data: { paid: true },
          });
        }
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.status(200).send('ok');
  } catch (error) {
    console.error('Error in webhook handler:', error);
    res.status(500).send('Internal Server Error');
  } finally {
    // Disconnect Prisma client
    await prisma.$disconnect();
  }
}


export const config = {
  api: {bodyParser:false,}
};

// bright-thrift-cajole-lean
// acct_1Lj5ADIUXXMmgk2a