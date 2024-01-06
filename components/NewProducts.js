// component/NewProduct.js

import React from "react";
import Center from "@/components/Center";
import ProductsGrid from "@/components/ProductsGrid";

const NewProducts = ({ products }) => {
  return (
    <Center>
      <h2 className="text-2xl my-6 mx-auto font-normal text-center text-gray-800 w-full">
        New Arrivals
      </h2>
      <div className="w-full h-auto flex-row justify-center items-center flex-wrap">
        <ProductsGrid products={products} />
      </div>
    </Center>
  );
};

export default NewProducts;
