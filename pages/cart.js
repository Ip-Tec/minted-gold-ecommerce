import React, { useContext, useEffect, useState } from "react";
import Header from "@/components/Header";
import Center from "@/components/Center";
import Button from "@/components/Button";
import { CartContext } from "@/components/CartContext";
import axios from "axios";
import Table from "@/components/Table";
import Input from "@/components/Input";

const ColumnsWrapper = ({ children }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">{children}</div>
);

const Box = ({ children }) => (
  <div className="bg-white rounded-lg p-8">{children}</div>
);

const FixedOrderBox = ({ children }) => (
  <div className="fixed top-1/2 right-0 transform -translate-y-1/2 w-80 max-h-90vh overflow-y-auto">
    {children}
  </div>
);

const ProductInfoCell = ({ children }) => (
  <td className="py-2">{children}</td>
);

const ButtonPP = ({ children, ...props }) => (
  <Button className="p-4.5" {...props}>
    {children}
  </Button>
);

const ProductImageBox = ({ children }) => (
  <div className="w-16 h-24 p-1 border border-gray-200 flex items-center justify-center rounded">
    {children}
  </div>
);

const QuantityLabel = ({ children }) => (
  <span className="block md:inline-block px-6">{children}</span>
);

const CityHolder = ({ children }) => (
  <div className="flex gap-5">{children}</div>
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

  useEffect(() => {
    // ... (unchanged code)
  }, [user, cartProducts]);

  useEffect(() => {
    // ... (unchanged code)
  }, []);

  // ... (unchanged code)

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
                {/* ... (unchanged code) */}
              </Table>
            )}
          </Box>
          {!!cartProducts?.length && (
            <FixedOrderBox>
              <Box>
                <h2>Order information</h2>
                {/* ... (unchanged code) */}
              </Box>
            </FixedOrderBox>
          )}
        </ColumnsWrapper>
      </Center>
    </>
  );
}
