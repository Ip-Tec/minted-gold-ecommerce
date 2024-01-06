// components/createContext.js

import { createContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export function CartContextProvider({ children }) {
  const ls = typeof window !== "undefined" ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts, ls]);

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, []);

  function addProduct(product) {
    // Check if the product is already in the cart
    const existingProductIndex = cartProducts.findIndex(
      (p) => p.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Update the quantity of the existing product
      setCartProducts((prev) => {
        const updatedProducts = [...prev];
        updatedProducts[existingProductIndex].quantity += 1;
        return updatedProducts;
      });
    } else {
      // Add the product to the cart with an initial quantity of 1
      setCartProducts((prev) => [...prev, { ...product, quantity: 1 }]);
    }
  }

  function removeProduct(product) {
    // Check if the product is already in the cart
    const existingProductIndex = cartProducts.findIndex(
      (p) => p.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Update the quantity of the existing product
      setCartProducts((prev) => {
        const updatedProducts = [...prev];
        updatedProducts[existingProductIndex].quantity = Math.max(
          updatedProducts[existingProductIndex].quantity - 1,
          0
        );
        return updatedProducts;
      });
    }
  }

  function clearCart() {
    setCartProducts([]);
  }

  function moreOfThisProduct(id) {
    const productToUpdate = cartProducts.find((p) => p.id === id);
    if (productToUpdate) {
      addProduct({
        ...productToUpdate,
        quantity: productToUpdate.quantity + 1,
      });
    }
  }

  function lessOfThisProduct(id) {
    const productToUpdate = cartProducts.find((p) => p.id === id);
    if (productToUpdate && productToUpdate.quantity > 1) {
      removeProduct({
        ...productToUpdate,
        quantity: productToUpdate.quantity - 1,
      });
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartProducts,
        setCartProducts,
        addProduct,
        removeProduct,
        moreOfThisProduct,
        lessOfThisProduct,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
