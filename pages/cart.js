"use client";
// pages/cart.js

import Header from "@/components/Header";
import Center from "@/components/Center";
import Button from "@/components/Button";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";

const ColumnsWrapper = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 my-10">
    {children}
  </div>
);

const Box = ({ children }) => (
  <div className="bg-white rounded-lg p-8">{children}</div>
);

const FixedOrderBox = ({ children }) => (
  <div className="top-1/2 right-0 fixed w-80 max-h-90vh overflow-y-auto transform -translate-y-1/2">
    {children}
  </div>
);

const ProductInfoCell = ({ children }) => <td className="py-2">{children}</td>;

const ButtonPP = ({ children, ...props }) => (
  <Button className="p-4 md:p-5" {...props}>
    {children}
  </Button>
);

const ProductImageBox = ({ children }) => (
  <div className="w-12 h-16 md:w-20 md:h-20 p-1 border border-solid border-gray-200 flex items-center justify-center rounded-lg">
    {children}
  </div>
);

const QuantityLabel = ({ children }) => (
  <span className="block md:inline-block px-4">{children}</span>
);

const CityHolder = ({ children }) => (
  <div className="flex gap-2">{children}</div>
);

export default function CartPage() {
  const { user, cartProducts, addProduct, removeProduct, clearCart } =
    useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [country, setCountry] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  console.log("hdgbfibu", {
    user,
    cartProducts,
    addProduct,
    removeProduct,
    clearCart,
  });
  useEffect(() => {
    if (user) {
      // User is logged in, use cart from context
      if (cartProducts.length > 0) {
        axios.post("/api/cart", { ids: cartProducts }).then((response) => {
          setProducts(response.data);
        });
      } else {
        setProducts([]);
      }
    } else {
      // User is not logged in, fetch cart from local storage
      const storedCart = localStorage.getItem("cart");
      console.log("storedCart:83", { storedCart });
      if (storedCart) {
        setProducts(JSON.parse(storedCart));
      } else {
        // If no cart data is found in local storage, you can fetch it from the server
        // Example: axios.get("/api/cart").then((response) => setProducts(response.data));
      }
    }
  }, [user, cartProducts]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (window?.location.href.includes("success")) {
      setIsSuccess(true);
      clearCart();
    }
  }, []);

  function moreOfThisProduct(id) {
    addProduct(id);
  }

  function lessOfThisProduct(id) {
    removeProduct(id);
  }

  async function goToPayment() {
    const response = await axios.post("/api/checkout", {
      name,
      email,
      city,
      postalCode,
      streetAddress,
      country,
      cartProducts,
    });
    if (response.data.url) {
      window.location = response.data.url;
    }
  }

  console.log("cartProducts", { cartProducts });

  let total = 0;
  for (const productId of cartProducts) {
    // console.log("productId:", productId);
    // console.log("products:", products);
    const price = products.find((p) => p.id === productId)?.price || 0;
    total += price;
  }

  if (isSuccess) {
    return (
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
              <h1>Thanks for your order!</h1>
              <p>We will email you when your order will be sent.</p>
            </Box>
          </ColumnsWrapper>
        </Center>
      </>
    );
  }

  return (
    <>
      <Header />
      <Center>
        <ColumnsWrapper>
          <Box>
            <h2>Cart</h2>
            {!cartProducts?.length && <div>Your cart is empty</div>}
            {products?.length > 0 && (
              <Table>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <ProductInfoCell>
                        <ProductImageBox>
                          {product.images && product.images.length > 0 ? (
                            <img src={product.images[0]} alt="" />
                          ) : (
                            <div>No Image</div>
                          )}
                        </ProductImageBox>
                        {product.title}
                      </ProductInfoCell>
                      <td>
                        <Button onClick={() => lessOfThisProduct(product.id)}>
                          -
                        </Button>
                        <QuantityLabel>
                          {
                            cartProducts.filter((id) => id === product.id)
                              .length
                          }
                        </QuantityLabel>
                        <Button onClick={() => moreOfThisProduct(product.id)}>
                          +
                        </Button>
                      </td>
                      <td>
                        $
                        {cartProducts.filter((id) => id === product.id).length *
                          product.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td></td>
                    <td></td>
                    <td>${total}</td>
                  </tr>
                </tfoot>
              </Table>
            )}
          </Box>
          {!!cartProducts?.length && (
            <FixedOrderBox className="h-72">
              <Box>
                <h2>Order information</h2>
                <Input
                  type="text"
                  placeholder="Name"
                  value={name}
                  name="name"
                  onChange={(ev) => setName(ev.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Email"
                  value={email}
                  name="email"
                  onChange={(ev) => setEmail(ev.target.value)}
                />
                <CityHolder>
                  <Input
                    type="text"
                    placeholder="City"
                    value={city}
                    name="city"
                    onChange={(ev) => setCity(ev.target.value)}
                  />
                  <Input
                    type="text"
                    placeholder="Postal Code"
                    value={postalCode}
                    name="postalCode"
                    onChange={(ev) => setPostalCode(ev.target.value)}
                  />
                </CityHolder>
                <Input
                  type="text"
                  placeholder="Street Address"
                  value={streetAddress}
                  name="streetAddress"
                  onChange={(ev) => setStreetAddress(ev.target.value)}
                />
                <Input
                  type="text"
                  placeholder="Country"
                  value={country}
                  name="country"
                  onChange={(ev) => setCountry(ev.target.value)}
                />
                <ButtonPP black block onClick={goToPayment}>
                  Continue to payment
                </ButtonPP>
              </Box>
            </FixedOrderBox>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}
