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

// ... (import statements)

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #222;
    z-index: 2;
  }
`;

const Search = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-left: 10px;
`;

const LogoWrapper = styled.div`
  flex-grow: 1;

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export default function Header() {
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
    <StyledHeader>
      <Center>
        <Wrapper>
          <SearchWrapper
            style={{ borderBottom: isScrolled ? "1px solid #ccc" : "none" }}
          >
            <LogoWrapper>
              <Logo href={"/"}>Minted Gold</Logo>
            </LogoWrapper>
            <Search type="text" placeholder="Search" />
          </SearchWrapper>
          <StyledNav mobileNavActive={mobileNavActive}>
            {/* Navigation links */}
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
