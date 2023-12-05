// pages/api/dashboard.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const totalProducts = await prisma.product.count();
    const totalUsers = await prisma.user.count();
    
    // Assuming there's a relationship between User and Product for wishlist
    const wishlistCount = await prisma.user.findUnique({
      where: { id: req.user.id }, // Assuming you have user information in the request
    }).productsInWishlist();

    res.status(200).json({ totalProducts, totalUsers, wishlistCount: wishlistCount.length });
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
