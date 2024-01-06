// compontents/ProductBox.js

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import Button from "@/components/Button";
import CartIcon from "@/components/icons/CartIcon";
import { CartContext } from "@/components/CartContext";

const ProductBox = ({ id, title, description, price, image }) => {
  const { addProduct } = useContext(CartContext);
  const url = "/product/" + id;
  let images;
  if (Array.isArray(image)) {
    images = image;
  } else {
    images = JSON.parse(image);
  }
  // console.log("ProductBox", { id, title, description, price, image });
  // console.log("ProductBox", image);
  // console.log("ProductBox");
  return (
    <div className="mb-6 m-4 text-black rounded-md shadow-sm hover:shadow-md w-[15rem]">
      <Link
        href={url}
        className="bg-white h-32 flex items-center justify-center rounded relative"
      >
        {/* <h1>Image_URL{images[0]}</h1> */}
        <Image
          priority
          alt={title}
          width={300}
          height={400}
          className="max-w-full max-h-40 mb-3 rounded-2xl"
          src={`${images[0]}` || "/logo.png"}
        />
        {/* <div className="text-sm font-normal absolute bg-gray-600 text-gray-50 rounded-full bg-opacity-75 -bottom-4 right-1 p-2">
          ${price}
        </div> */}
      </Link>
      <div className="mt-2 flex flex-col">
        <Link
          href={url}
          className="font-normal text-base text-black mt-2 mx-1 divide-solid border-b border-b-gray-500"
        >
          {title}
        </Link>
        <Link
          href={url}
          className="font-normal text-base text-black mt-2 mx-1 divide-solid border-b border-b-gray-500"
        >
          5 star ({(price / 8) * 2 + 1})
        </Link>
        <Link
          href={url}
          className="font-normal flex justify-between text-base text-black my-2 mx-1 px-2 divide-solid border-b border-b-gray-500"
        >
          <span className="text-base">₦{price}</span>
          <del className="opacity-90 text-gray-400">₦{price + 20}</del>
        </Link>
        <div className="sm:block md:flex justify-evenly mb-1 items-center w-full text-xs mt-1">
          <Button
            // onClick={() => addProduct(id)}
            className="flex justify-evenly border-b-2 hover:border-2 p-1 rounded-md hover:shadow-md hover:bg-gray-500 hover:text-gray-50 px-2"
          >
            {" "}
            Learn More
          </Button>

          <Button
            onClick={() =>
              addProduct({
                id,
                title,
                price,
                image: images[0],
                quantity: 1,
              })
            }
            className="flex justify-evenly border-gray-500 border-2 p-1 rounded-md shadow-md hover:bg-gray-500  hover:text-gray-50 px-2"
          >
            <CartIcon className="mx-1 w-4 ch " /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
