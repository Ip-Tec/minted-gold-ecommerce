// pages/api/product.js

import { PrismaClient } from "@prisma/client";
import { getSession } from "next-auth/react";
import { authOptions } from "@/lib/authOptions";
import { isAdminRequest } from "@/pages/api/auth/[...nextauth]";

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const session = await getSession({ req });

  // await isAdminRequest()
  // useEffect(() => {
  // Use the session data here
  // console.log("product", session);
  // console.log(session);
  // }, [session]);

  const { method } = req;

  // get all product
  if (method === "GET") {
    if (req.query?.id) {
     // console.log("req.query", req.query);
      const productId = parseInt(req.query.id, 10); // or Number(req.query.id)
      const product = await prisma.product.findUnique({
        where: { id: productId, adminName: req.query.adminName },
      });

      res.json(product);
    } else {
      const products = await prisma.product.findMany();
      res.json(products);
    }
  }

  // Create new product
  if (method === "POST") {
    // console.log("req.body", req.body);
    // console.log("req.bodyimages[1]", req.body.images[1]);
    const { title, description, price, image, category, stock, adminName } =
      req.body;
    // Ensure that the price is a numeric value
    const numericPrice = parseFloat(price);
    // if (!Array.isArray(image)) {
    //   return res.status(400).json({ error: "Invalid image format" });
    // }
   // console.log(req.body.image);
    const product = await prisma.product.create({
      data: {
        title,
        stock,
        category,
        description,
        adminName,
        price: numericPrice,
        createdAt: new Date(),
        updatedAt: new Date(),
        image: image,
      },
    });
    res.json(product);
  }

  // Edit product
  if (method === "PUT") {
    const { title, description, price, images, category, stock, id } = req.body;

    // Ensure that the price is a numeric value
    const numericPrice = parseFloat(price);

    await prisma.product.update({
      where: { id },
      data: {
        title,
        stock,
        category,
        description,
        image: images,
        price: numericPrice,
        updatedAt: new Date(),
      },
    });

    res.json(true);
  }

  // Delete product
  if (method === "DELETE") {
    if (req.query?.id) {
      const productId = parseInt(req.query.id, 10);
      const productadminName = req.query.adName;
      const authUser = req.query.auth;
      // Check if the authenticated user is the owner of the product
      if (authUser !== productadminName) {
        return res.status(403).json({ error: "Unauthorized" });
      }
      await prisma.product.delete({
        where: { id: productId },
      });
      res.json(true);
    }
  }
}
