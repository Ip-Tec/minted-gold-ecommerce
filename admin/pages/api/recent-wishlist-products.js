// pages/api/recent-wishlist-products.js
import { PrismaClient } from "@prisma/client";
import { isAdminRequest } from "@/pages/api/auth/[...nextauth]";

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const { method } = req;
  await isAdminRequest(req, res);

  if (req.method === "GET") {
    try {
      // Assuming there's a relationship between User and Product for wishlist
      const recentWishlistProducts = await prisma.user
        .findUnique({
          where: { id: req.user.id },
        })
        .wishlist({
          orderBy: { createdAt: 'desc' }, // Order by createdAt in descending order
          take: 10, // Limit to the most recent 5 wishlist items, adjust as needed
        });

      res.status(200).json({ recentWishlistProducts });
    } catch (error) {
      console.error("Error fetching recent wishlist products:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
