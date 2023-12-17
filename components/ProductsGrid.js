// components/ProductsGrid.js

import React from "react";
import ProductBox from "@/components/ProductBox";

const ProductsGrid = ({ products }) => {
  console.log("ProductsGrid", products );
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {products?.length > 0 &&
        products.map((product) => <ProductBox key={product.id} {...product} />)}
    </div>
  );
};

export default ProductsGrid;
