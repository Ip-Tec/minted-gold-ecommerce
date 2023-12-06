import Link from "next/link";
import styled from "styled-components";
import Center from "@/components/Center";
import BarsIcon from "@/components/icons/Bars";
import { CartContext } from "@/components/CartContext";
import { useContext, useState, useEffect } from "react";
import { getCurrentGoldPrice } from "@/models/GoldPrice";

const StyledHeader = styled.header`
  background-color: #222;
`;
const Logo = styled(Link)`
  color: #fff;
  text-decoration: none;
  position: relative;
  z-index: 3;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;
const StyledNav = styled.nav`
  ${(props) =>
    props.mobileNavActive
      ? `
    display: block;
  `
      : `
    display: none;
  `}
  gap: 15px;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 70px 20px 20px;
  background-color: #222;
  @media screen and (min-width: 768px) {
    display: flex;
    position: static;
    padding: 0;
  }
`;
const NavLink = styled(Link)`
  display: block;
  color: #aaa;
  text-decoration: none;
  padding: 10px 0;
  @media screen and (min-width: 768px) {
    padding: 0;
  }
`;
const NavButton = styled.button`
  background-color: transparent;
  width: 30px;
  height: 30px;
  border: 0;
  color: white;
  cursor: pointer;
  position: relative;
  z-index: 3;
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export default function Header() {
  const { cartProducts } = useContext(CartContext);
  const [mobileNavActive, setMobileNavActive] = useState(false);
  const [currentGold, setCurrentGold] = useState(null);

  useEffect(() => {
    const fetchGoldPrice = async () => {
      const goldPrice = await getCurrentGoldPrice();
      setCurrentGold(goldPrice);
    };

    fetchGoldPrice();
  }, []);
  return (
    <StyledHeader>
      <Center>
        <Wrapper>
          <Logo href={"/"}>Minted Gold</Logo>
          <StyledNav mobileNavActive={mobileNavActive}>
            {/* <NavLink href={"/"}>Home</NavLink> */}
            <NavLink href={"/products"}>All products</NavLink>
            {/* <NavLink href={"/categories"}>Categories</NavLink> */}
            {/* <NavLink href={"/account"}>Account</NavLink> */}
            <NavLink href="" className="text-orange-300 block py-2 px-0 m-0">
              Gold Price $ ({currentGold ? currentGold.rates.USD : "Loading..."}
              )
            </NavLink>
          </StyledNav>
            <NavLink href={"/cart"}>Cart ({cartProducts.length})</NavLink>
          <NavButton onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon />
          </NavButton>
        </Wrapper>
      </Center>
    </StyledHeader>
  );
}
