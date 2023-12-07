// pages/api/category.js

import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions, isAdminRequest } from '@/pages/api/auth/[...nextauth]';

export default async function handle(req, res) {
  const { method } = req;
  await isAdminRequest(req, res);

  if (method === 'GET') {
    const categories = await prisma.category.findMany({
      include: { parent: true },
    });
    res.json(categories);
  }

  if (method === 'POST') {
    const { name, parentCategory, properties } = req.body;
    const categoryDoc = await prisma.category.create({
      data: {
        name,
        parentId: parentCategory || undefined,
        properties,
      },
    });
    res.json(categoryDoc);
  }

  if (method === 'PUT') {
    const { name, parentCategory, properties, _id } = req.body;
    const categoryDoc = await prisma.category.update({
      where: { id: _id },
      data: {
        name,
        parentId: parentCategory || undefined,
        properties,
      },
    });
    res.json(categoryDoc);
  }

  if (method === 'DELETE') {
    const { _id } = req.query;
    await prisma.category.delete({
      where: { id: parseInt(_id) },
    });
    res.json('ok');
  }
}
