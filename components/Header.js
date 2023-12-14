// component/Header.js
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Center from "@/components/Center";
import BarsIcon from "@/components/icons/Bars";
import { CartContext } from "@/components/CartContext";
import { useContext } from "react";
import { getCurrentGoldPrice } from "@/lib/GoldPrice";

const Header = () => {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [currentGold, setCurrentGold] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    const fetchGoldPrice = async () => {
      const goldPrice = await getCurrentGoldPrice();
      setCurrentGold(goldPrice);
    };

    fetchGoldPrice();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="bg-black">
      <Center>
        <div className="flex justify-between py-5 items-center">
          <div className="flex items-center space-x-4">
            <div className="flex-grow">
              <Link href="/" className="text-white text-lg font-bold">
                Minted Gold{" "}
              </Link>
            </div>
            <div className="hidden md:flex items-center">
              <p className="">Current Gold{currentGold}</p>
            </div>
          </div>
          <div className="md:hidden">
            <button
              className="text-white"
              onClick={() => setMobileNavActive((prev) => !prev)}
            >
              <BarsIcon />
            </button>
          </div>
          <div className="hidden md:block">
            <Link href="/cart" className="text-white">
              {" "}
              Cart ({cartProducts.length})
            </Link>
          </div>
        </div>
        <div
          className="flex items-center"
          style={{ borderBottom: isScrolled ? "1px solid #ccc" : "none" }}
        >
          <div className="flex-grow hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="py-2 px-4 border border-gray-300 rounded"
            />
          </div>
        </div>
      </Center>
    </header>
  );
};

export default Header;
