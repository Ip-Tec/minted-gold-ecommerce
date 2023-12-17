// component/Header.js
import Link from "next/link";
import { useContext } from "react";
import Center from "@/components/Center";
import BarsIcon from "@/components/icons/Bars";
import React, { useState, useEffect } from "react";
import { CartContext } from "@/components/CartContext";
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
    <header className="bg-yellow-700 px-3 h-20 sticky w-full ">
        <div className="flex justify-between w-auto items-center">
          <div className="flex items-center space-x-4">
            <div className="flex-grow">
              <Link href="/" className="text-white text-lg font-bold">
                <img src="./logo.png" className="w-20 p-0 m-0" alt="Minted Gold"/>
              </Link>
            </div>
            <div className="flex items-center">
              <p className="">Current Gold {currentGold || "$200" }</p>
            </div>
          </div>
          {/* <div className="md:hidden">
            <button
              className="text-white"
              onClick={() => setMobileNavActive((prev) => !prev)}
            >
              <BarsIcon />
            </button>
          </div> */}
          <div className="block mr-0">
            <Link href="/cart" className="text-white pr-2">
              {" "}
              Cart ({cartProducts.length})
            </Link>
          </div>
        </div>
        {/* <div
          className="flex items-center"
          style={{ borderBottom: isScrolled ? "1px solid #ccc" : "none" }}
        >
          <div className="flex-grow sm:block">
             <input
              type="text"
              placeholder="Search"
              className="py-2 px-4 border border-gray-300 rounded"
            /> 
          </div>
        </div> */}
    </header>
  );
};

export default Header;
