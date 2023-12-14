import React, { useContext } from "react";
import Header from "@/components/Header";
import Center from "@/components/Center";
import Title from "@/components/Title";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import { CartContext } from "@/components/CartContext";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ColWrapper = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 my-10">
    {children}
  </div>
);

const PriceRow = ({ children }) => (
  <div className="flex items-center gap-8 md:gap-12 mt-8">{children}</div>
);

const Price = ({ children }) => <span className="text-lg md:text-xl">{children}</span>;

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
          <div className="bg-white rounded-lg p-8">
            {product.images && product.images.length > 0 && (
              <ProductImages images={product.images} />
            )}
          </div>
          <div>
            {product.title && <Title>{product.title}</Title>}
            {product.description && <p>{product.description}</p>}
            <PriceRow>
              <div>{product.price && <Price>${product.price}</Price>}</div>
              <div>
                {addProduct && (
                  <Button primary onClick={() => addProduct(product._id)}>
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
