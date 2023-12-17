import Title from "@/components/Title";
import Button from "@/components/Button";
import Header from "@/components/Header";
import Center from "@/components/Center";
import React, { useContext } from "react";
import { PrismaClient } from "@prisma/client";
import CartIcon from "@/components/icons/CartIcon";
import ProductImages from "@/components/ProductImages";
import { CartContext } from "@/components/CartContext";

const prisma = new PrismaClient();

const ColWrapper = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 my-10 text-black">
    {children}
  </div>
);

const PriceRow = ({ children }) => (
  <div className="flex items-center justify-center md:gap-12 mt-8">{children}</div>
);

const Price = ({ children }) => <span className="text-lg md:text-xl text-black">{children}</span>;

const ProductPage = ({ product }) => {
  const { addProduct } = useContext(CartContext);

  if (!product) {
    return (
      <>
        <Header />
        <Center>
          <p>Product not found.</p>
        </Center>
      </>
    );
  }

  return (
    <>
      <Header />
      <Center>
        <ColWrapper>
          <div className="rounded-lg max-h-screen">
            {product.image && product.image.length > 0 && (
              <ProductImages images={product.image} />
            )}
          </div>
          <div className="md:mt-28 w-full m-auto text-center">
            {product.title && <Title>{product.title}</Title>}
            {product.description && <p>{product.description}</p>}
            <PriceRow>
              <div >{product.price && <Price>${product.price}</Price>}</div>
              <div>
                {addProduct && (
                  <Button onClick={() => addProduct(product._id)} className="flex justify-evenly align-middle border-yellow-500 border-2 p-1 rounded-md shadow-md hover:bg-yellow-500">
                    <CartIcon />
                    Add to cart
                  </Button>
                )}
              </div>
            </PriceRow>
          </div>
        </ColWrapper>
      </Center>
    </>
  );
};

export default ProductPage;

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    if (!id) {
      throw new Error("Product ID not provided");
    }

    const product = await prisma.product.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    return {
      props: {
        product: JSON.parse(JSON.stringify(product)),
      },
    };
  } catch (error) {
    console.error("Error fetching product:", error.message);
    return {
      props: {
        product: null,
      },
    };
  }
}
