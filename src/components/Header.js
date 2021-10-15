import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <Container>
      <a href="s">
        <img src="/images/logo.svg" alt="" />
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
        <CustomMenu />
        <BurgerNav>
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
      </RightMenu>
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

const BurgerNav = styled.div``;
