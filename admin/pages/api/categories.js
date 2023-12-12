// pages/api/category.js

import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions, isAdminRequest } from "@/pages/api/auth/[...nextauth]";

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const { method } = req;
  // const jjj = await isAdminRequest(req, res);
  // console.log({ jjj });
  if (method === "GET") {
    try {
      const categories = await prisma.categorie.findMany();
      res.json(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  if (method === "POST") {
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

  if (method === "PUT") {
    const { name, parentCategory, properties, id } = req.body;
    const categoryDoc = await prisma.category.update({
      where: { id: id },
      data: {
        name,
        parentId: parentCategory || undefined,
        properties,
      },
    });
    res.json(categoryDoc);
  }

  if (method === "DELETE") {
    const { id } = req.query;
    await prisma.category.delete({
      where: { id: parseInt(id) },
    });
    res.json("ok");
  }
}
