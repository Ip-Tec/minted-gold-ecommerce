// component/NewProduct.js

import React from 'react';
import Center from '@/components/Center';
import ProductsGrid from '@/components/ProductsGrid';

const NewProducts = ({ products }) => {
  return (
    <Center>
      <h2 className="text-2xl my-6 font-normal">New Arrivals</h2>
      <ProductsGrid products={products} />
    </Center>
  );
};

export default NewProducts;
