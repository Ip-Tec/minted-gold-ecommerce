// compontents/ProductBox.js

import React from 'react';
import Button from '@/components/Button';
import CartIcon from '@/components/icons/CartIcon';
import Link from 'next/link';
import { useContext } from 'react';
import { CartContext } from '@/components/CartContext';

const ProductBox = ({ id, title, description, price, images }) => {
  const { addProduct } = useContext(CartContext);
  const url = '/product/' + id;

  return (
    <div className="mb-6">
      <Link href={url}>
        <a className="bg-white p-4 h-32 flex items-center justify-center rounded">
          <img className="max-w-full max-h-20" src={images?.[0]} alt="" />
        </a>
      </Link>
      <div className="mt-2">
        <Link href={url}>
          <a className="font-normal text-sm text-black no-underline">{title}</a>
        </Link>
        <div className="flex justify-between mt-1">
          <div className="text-sm font-normal">${price}</div>
          <Button block onClick={() => addProduct(id)} primary outline>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
