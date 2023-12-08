// pages/product/[id].js
import React, { useContext } from "react";
import Header from "@/components/Header";
import Center from "@/components/Center";
import Title from "@/components/Title";
import WhiteBox from "@/components/WhiteBox";
import ProductImages from "@/components/ProductImages";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import styled from "styled-components";
import { CartContext } from "@/components/CartContext";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const ColWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 768px) {
    grid-template-columns: 0.8fr 1.2fr;
  }
  gap: 40px;
  margin: 40px 0;
`;
const PriceRow = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;
const Price = styled.span`
  font-size: 1.4rem;
`;

export default function ProductPage({ product }) {
  const { addProduct } = useContext(CartContext);

  // Check if product data is available
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
          <WhiteBox>
            {/* Check if images array is available before rendering */}
            {product.images && product.images.length > 0 && (
              <ProductImages images={product.images} />
            )}
          </WhiteBox>
          <div>
            {/* Check if title is available before rendering */}
            {product.title && <Title>{product.title}</Title>}
            
            {/* Check if description is available before rendering */}
            {product.description && <p>{product.description}</p>}
            
            <PriceRow>
              <div>
                {/* Check if price is available before rendering */}
                {product.price && <Price>${product.price}</Price>}
              </div>
              <div>
                {/* Check if addProduct function is available before using it */}
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
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    // Check if id is available
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
