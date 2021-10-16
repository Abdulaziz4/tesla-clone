import styled from "styled-components";
import Fade from "react-reveal/Fade";
import downArrow from "../images/down-arrow.svg";
const Section = ({
  title,
  description,
  leftBtnTxt,
  rightBtnTxt,
  backgroundImg,
}) => {
  return (
    <Wrap img={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <div>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnTxt}</LeftButton>
            {rightBtnTxt && <RightButton>{rightBtnTxt}</RightButton>}
          </ButtonGroup>
        </Fade>
        <DownArrow src={downArrow} />
      </div>
    </Wrap>
  );
};

export default Section;

const Wrap = styled.div`
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-image: ${(props) => `url("${props.img}")`};
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ItemText = styled.div`
  padding-top: 15vh;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 5vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  height: 40px;
  width: 256px;
  background-color: rgba(23, 26, 32, 0.8);
  text-transform: uppercase;
  color: white;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  opacity: 0.8;
  margin: 10px;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;
