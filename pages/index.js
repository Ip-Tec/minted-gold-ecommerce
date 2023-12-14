// pages/index.js

import Header from "@/components/Header";
import Featured from "@/components/Featured";
import { prisma } from "@/lib/prisma";

import NewProducts from "@/components/NewProducts";

// const prisma = new PrismaClient();

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
  // Assuming your product ID is an integer
  const featuredProductId = 1;

  try {
    const featuredProduct = await prisma.product.findUnique({
      where: {
        id: featuredProductId,
      },
    });

    const newProducts = await prisma.product.findMany({
      orderBy: {
        id: "desc",
      },
      take: 28,
    });

    // Check if featuredProduct is null or undefined
    if (!featuredProduct) {
      return props.title = <h3>Featured product not found</h3>;
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
