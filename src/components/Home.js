import styled from "styled-components";
import Section from "./Section";
import useScrollSnap from "react-use-scroll-snap";
import { useRef } from "react";
import modelsImg from "../images/model-s.jpg";
import modelyImg from "../images/model-y.jpg";
import model3Img from "../images/model-3.jpg";
import modelxImg from "../images/model-x.jpg";
import solarPanelImg from "../images/solar-panel.jpg";
import solarRoofImg from "../images/solar-roof.jpg";
import accessoryImg from "../images/accessories.jpg";

const Home = () => {
  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 100, delay: 1 });

  return (
    <Container ref={scrollRef}>
      <Section
        title="Model S"
        description="Order Online for Touchless Delivery"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
        backgroundImg={modelsImg}
      />
      <Section
        title="Model Y"
        description="Order Online for Touchless Delivery"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
        backgroundImg={modelyImg}
      />
      <Section
        title="Model 3"
        description="Order Online for Touchless Delivery"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
        backgroundImg={model3Img}
      />
      <Section
        title="Model X"
        description="Order Online for Touchless Delivery"
        leftBtnTxt="Custom Order"
        rightBtnTxt="Existing Inventory"
        backgroundImg={modelxImg}
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back Guarantee"
        leftBtnTxt="Order Now"
        rightBtnTxt="Learn More"
        backgroundImg={solarPanelImg}
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        leftBtnTxt="Order Now"
        rightBtnTxt="Learn More"
        backgroundImg={solarRoofImg}
      />
      <Section
        title="Accessories"
        description=""
        leftBtnTxt="Order Now"
        backgroundImg={accessoryImg}
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
