// pages/api/category.js

import { PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { authOptions, isAdminRequest } from "@/pages/api/auth/[...nextauth]";

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const { method } = req;

  // Get Categories
  if (method === "GET") {
    try {
      const categories = await prisma.categorie.findMany();
      res.json(categories);
    } catch (error) {
      console.error("Error fetching categories:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  // Create Categories
  if (method === "POST") {
    console.log(req.body);
    const { name, description, parentCategory } = req.body;
    const categoryDoc = await prisma.categorie.create({
      data: {
        name,
        description,
        // parentId: parentCategory || undefined,
        // properties,
      },
    });
    res.json(categoryDoc);
  }

  // Edit Categories
  if (method === "PUT") {
    const { name, parentCategory, properties, id } = req.body;
    const categoryDoc = await prisma.categorie.update({
      where: { id: id },
      data: {
        name,
        parentId: parentCategory || undefined,
        properties,
      },
    });
    res.json(categoryDoc);
  }

  // Delete Categories
  if (method === "DELETE") {
    const { id } = req.query;
    await prisma.categorie.delete({
      where: { id: parseInt(id) },
    });
    res.json("ok");
  }
}
