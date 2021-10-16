import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../images/logo.svg";

import { useState } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleBurgerHandler = () => {
    console.log(isMenuOpen);
    setIsMenuOpen((prevState) => !isMenuOpen);
  };
  return (
    <Container>
      <a href="s">
        <img src={logo} alt="" />
      </a>
      <Menu>
        <a href="1">Model S</a>
        <a href="1">Model 3</a>
        <a href="1">Model X</a>
        <a href="1">Model Y</a>
      </Menu>
      <RightMenu>
        <a href="1">Shop</a>
        <a href="1">Account</a>
        <CustomMenu onClick={toggleBurgerHandler} />
      </RightMenu>
      <BurgerNav show={isMenuOpen}>
        <CloseWrapper>
          <CustomClose onClick={toggleBurgerHandler} />
        </CloseWrapper>
        <li>
          <a href="1">Model S</a>
        </li>
        <li>
          <a href="1">Model 3</a>
        </li>
        <li>
          <a href="1">Model X</a>
        </li>
        <li>
          <a href="1">Model Y</a>
        </li>

        <li>
          <a href="1">Existing Inventory</a>
        </li>
        <li>
          <a href="1">Used Inventory</a>
        </li>
        <li>
          <a href="1">Cybertruck</a>
        </li>
        <li>
          <a href="1">Roadster</a>
        </li>
        <li>
          <a href="1">Events</a>
        </li>
        <li>
          <a href="1">Agents</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  min-height: 60px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 600;
    text-transform: uppercase;
    margin: 0 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  background-color: white;
  list-style: none;
  z-index: 100;
  text-align: start;
  padding: 15px 10px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 15px 0;
    a {
      font-weight: 600;
    }
  }
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: end;
`;
