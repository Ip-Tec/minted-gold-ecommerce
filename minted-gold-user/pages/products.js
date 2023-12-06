// pages/products.js
import Header from "@/components/Header";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";
import Title from "@/components/Title";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function ProductsPage({ products }) {
  return (
    <>
      <Header />
      <Center>
        <Title>All products</Title>
        <ProductsGrid products={products} />
      </Center>
    </>
  );
}

export async function getServerSideProps() {
  const products = await prisma.product.findMany({
    orderBy: { id: 'desc' }, // or however you want to order
  });

  return {
    props: {
      products: JSON.parse(JSON.stringify(products)),
    },
  };
}
