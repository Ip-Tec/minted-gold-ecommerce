import { useContext } from "react";
import { Image } from "next/image";
import Button from "@/components/Button";
import Center from "@/components/Center";
import ButtonLink from "@/components/ButtonLink";
import CartIcon from "@/components/icons/CartIcon";
import { CartContext } from "@/components/CartContext";

export default function Featured({ product }) {
  const { addProduct } = useContext(CartContext);

  function addFeaturedToCart() {
    addProduct(product.id);
    console.log(product);
  }
  console.log({ product });
  return (
    <div className="bg-gray-900 text-white py-10">
      <Center>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <h1 className="m-0 text-3xl md:text-5xl">
              {product?.title || "No Title"}
            </h1>
            <p className="text-gray-500 text-sm md:text-base">
              {product?.description || "No Description"}
            </p>

            <div className="flex gap-10 mt-5">
              <ButtonLink
                href={`/product/${product}`}
                outline={true}
                white={true}
              >
                Read more
              </ButtonLink>
              <Button white onClick={addFeaturedToCart}>
                <CartIcon />
                Add to cart
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={{ pathname: `/productImg/${product}` }}
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>
      </Center>
    </div>
  );
}
