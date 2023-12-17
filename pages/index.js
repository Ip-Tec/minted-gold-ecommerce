// pages/index.js

import Header from "@/components/Header";
import Featured from "@/components/Featured";
import { PrismaClient } from "@prisma/client";
import NewProducts from "@/components/NewProducts";

const prisma = new PrismaClient();

async function getServerSideProps() {
  // Assuming your product ID is an integer
  const featuredProductId = 5;

  try {
    const featuredProduct = await prisma.product.findUnique({
      where: {
        id: featuredProductId,
      },
    });

    console.log({ featuredProductId });

    const newProducts = await prisma.product.findMany({
      orderBy: {
        id: "desc",
      },
      take: 28,
    });

    // Check if featuredProduct is null or undefined
    if (!featuredProduct) {
      throw new Error("Featured product not found");
    }

    return {
      props: {
        featuredProduct: JSON.parse(JSON.stringify(featuredProduct)),
        newProducts: JSON.parse(JSON.stringify(newProducts)),
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error.message);

    // Handle the error gracefully, you might want to render an error page
    return {
      props: {
        featuredProduct: null,
        newProducts: [],
      },
    };
  }
}

export { getServerSideProps };

export default function HomePage({ featuredProduct, newProducts }) {
  return (
    <div>
      <Header />
      <Featured product={featuredProduct} />
      <NewProducts products={newProducts} />
    </div>
  );
}
