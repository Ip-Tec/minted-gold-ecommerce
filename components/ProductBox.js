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
  console.log("ProductBox", { id, title, description, price, image });
  return (
    <div className="mb-6 text-black rounded-md shadow-sm hover:shadow-md hover:shadow-yellow-500 p-1">
      <Link
        href={url}
        className="bg-white p-4 h-32 flex items-center justify-center rounded relative"
      >
        <Image
          className="max-w-full max-h-20"
          src={`http://localhost:3001${image?.[0]}` || "./logo.png"}
          alt={title}
          width={200}
          height={600}
        />
        <div className="text-sm font-normal absolute bg-gray-600 text-gray-50 rounded-full -bottom-4 right-1 p-2">
            ${price}</div>
      </Link>
      <div className="mt-2">
        <Link
          href={url}
          className="font-normal text-sm text-black no-underline"
        >
          {title}
        </Link>
        <div className="flex justify-between mt-1 flex-col">
          <Button onClick={() => addProduct(id)} className="flex justify-evenly align-middle border-yellow-500 border-2 p-1 rounded-md shadow-md hover:bg-yellow-500">
            <CartIcon className="mx-1 w-5 " /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
