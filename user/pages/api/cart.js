// pages/api/cart.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handle(req, res) {
  try {
    const ids = req.body.ids.map((id) => {
      const parsedId = parseInt(id);
      return isNaN(parsedId) ? null : parsedId;
    });

    const products = await prisma.product.findMany({
      where: {
        id: { in: ids.filter((id) => id !== null) }, // Filter out null values
      },
    });

    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  } finally {
    await prisma.$disconnect();
  }
}
