import styled from "styled-components";

const Header = () => {
  return (
    <Container>
      <a href="s">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="1">
          <p>Model S</p>
        </a>
        <a href="1">
          <p>Model 3</p>
        </a>
        <a href="1">
          <p>Model X</p>
        </a>
        <a href="1">
          <p>Model Y</p>
        </a>
      </Menu>
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
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  p {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
  }
`;
