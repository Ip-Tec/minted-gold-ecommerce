// pages/api/order.js

import prisma from '@/lib/prisma';

export default async function handler(req, res) {
  const orders = await prisma.order.findMany({
    orderBy: { createdAt: 'desc' },
  });
  res.json(orders);
}
