// pages/api/product.js

import { PrismaClient } from "@prisma/client";
import { isAdminRequest } from "@/pages/api/auth/[...nextauth]";

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const { method } = req;

  await isAdminRequest(req, res);

  if (method === "GET") {
    if (req.query?.id) {
      const product = await prisma.product.findUnique({
        where: { id: req.query.id },
      });
      res.json(product);
    } else {
      const products = await prisma.product.findMany();
      res.json(products);
    }
  }

  if (method === "POST") {
    const { title, description, price, images, category, properties } =
      req.body;
    const product = await prisma.product.create({
      data: {
        title,
        description,
        price,
        images,
        category,
        properties,
      },
    });
    res.json(product);
  }

  if (method === "PUT") {
    const { title, description, price, images, category, properties, id } =
      req.body;
    await prisma.product.update({
      where: { id },
      data: {
        title,
        description,
        price,
        images,
        category,
        properties,
        updatedAt: new Date(),
      },
    });
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await prisma.product.delete({
        where: { id: req.query.id },
      });
      res.json(true);
    }
  }
}
