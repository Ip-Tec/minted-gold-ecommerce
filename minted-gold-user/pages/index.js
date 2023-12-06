// pages/index.js

import Header from "@/components/Header";
import Featured from "@/components/Featured";
import { PrismaClient } from '@prisma/client';
import NewProducts from "@/components/NewProducts";

const prisma = new PrismaClient();

export default function HomePage({ featuredProduct, newProducts }) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} />
    </div>
  );
}

export async function getServerSideProps() {
  const featuredProductId = 1; // Assuming your product ID is an integer
  const featuredProduct = await prisma.product.findUnique({
    where: {
      id: featuredProductId,
    },
  });

  const newProducts = await prisma.product.findMany({
    orderBy: {
      _id: 'desc',
    },
    take: 10,
  });

  return {
    props: {
      featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
      newProducts: JSON.parse(JSON.stringify(newProducts)),
    },
  };
}
