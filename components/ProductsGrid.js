// components/ProductsGrid.js

import React from "react";
import ProductBox from "@/components/ProductBox";

const ProductsGrid = ({ products }) => {
  // console.log("ProductsGrid", products);
  return (
    <div className="w-full flex flex-wrap justify-center items-center m-2">
      {products?.length > 0 &&
        products.map((product) => <ProductBox key={product.id} {...product} />)}
    </div>
  );
};

export default ProductsGrid;
