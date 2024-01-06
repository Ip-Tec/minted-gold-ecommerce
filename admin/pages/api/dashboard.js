// pages/api/dashboard.js
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { authOptions } from "@/lib/authOptions";
import { isAdminRequest } from "@/pages/api/auth/[...nextauth]";

const prisma = new PrismaClient();

export default async function handle(req, res) {
  const { method } = req;
  const session = await getServerSession(req, res, authOptions);
  await isAdminRequest(req, res);
  if (req.method === "GET") {
    try {
      // Modify this query to filter users based on role
      const totalUsers = await prisma.user.count({
        where: {
          OR: [{ role: "user" }, { role: "client" }],
        },
      });

      const totalProducts = await prisma.product.count();

      // Assuming there's a relationship between User and Product for wishlist
      const wishlistCount = await prisma.user.findUnique({
        where: { id: session.user.id },
      });
      // console.log(wishlistCount);
      res.status(200).json({
        totalProducts,
        totalUsers,
        wishlistCount: wishlistCount.length || 0,
      });
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      res.status(401).json({ error: "User not authenticated" });
    }
  } else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
