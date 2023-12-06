// pages/api/dashboard.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
<<<<<<< HEAD
    try {
      // Safeguard: Check if req.user is defined
      if (!req.user) {
        throw new Error('User not authenticated');
      }

      const totalProducts = await prisma.product.count();
      const totalUsers = await prisma.user.count();

      // Assuming there's a relationship between User and Product for wishlist
      const wishlistCount = await prisma.user
        .findUnique({
          where: { id: req.user.id },
        })
        .productsInWishlist();

      res.status(200).json({
        totalProducts,
        totalUsers,
        wishlistCount: wishlistCount.length,
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error.message);
      res.status(401).json({ error: 'User not authenticated' });
    }
=======
    const totalProducts = await prisma.product.count();
    const totalUsers = await prisma.user.count();
    
    // Assuming there's a relationship between User and Product for wishlist
    // const wishlistCount = await prisma.admin.findUnique({
    //   where: { admin: req.admin.username }, // Assuming you have user information in the request
    // }).productsInWishlist();

    res.status(200).json({ totalProducts, totalUsers, wishlistCount: 90 });
>>>>>>> refs/remotes/origin/main
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
