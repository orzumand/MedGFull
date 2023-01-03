import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../Assets/Icons/Vector.svg";
const Wrapper = styled.div`
  width: 100%;
  padding: var(--padding);
  background: #f8f8f8;
  height: 443px;
  ${({ mode }) => mode && "background: #323232;,color:white;"}
`;
const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: auto;
  flex-direction: column;
  gap: 36px;
  padding: 64px 0px;

  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 37px;
    line-height: 45px;
    /* identical to box height */

    /* Light/black */

    color: #402c36;
    ${({ mode }) => mode && "color:white;"}
  }
`;

const Button = styled.div`
  padding: 0px 14px;
  border-radius: 14px;
  font-weight: 500;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 47px;
  width: 180px;
  gap: 8px;
  background: #e72887;
  color: white;
  justify-content: center;
  cursor: pointer;
  :active {
    transform: scale(0.98);
  }
`;

const Card = styled.div`
  width: 390px;
  height: 224px;
  background-color: #ffff;
  border-radius: 12px;
  padding: 26px;
  padding-top: 51px;
  position: relative;
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 21px;
    line-height: 25px;
    width: 326px;
    /* Light/black */

    color: #402c36;
    margin-bottom: 12px;
    ${({ mode }) => mode && "color:#ffffff;"}
  }
  .sibtitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;
    /* or 19px */

    /* Light/sec */

    color: #c2b7bd;
    ${({ mode }) => mode && "color:##C2B7BD;"}
  }
  ${({ mode }) => mode && "background:#454545;"}
`;

const Arrows = styled.div``;

const Carousel = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  position: relative;
  .slick-next {
    display: none !important;
  }
  .slick-prev {
    display: none !important;
  }
`;

Arrows.Left = styled(Arrow)`
  width: 44px;
  height: 44px;
  background: rgba(231, 40, 135, 0.1);
  padding: 13px;
  border-radius: 50%;
  transform: rotate(270deg);
  cursor: pointer;
  & path {
    stroke: #e72887;
    ${({ mode }) => mode && " stroke: #ffffff;"}
  }
  position: absolute;
  z-index: 1;
  right: 0;
  top: 45%;
  :active {
    background-color: #ffffff;
    ${({ mode }) => mode && " background: #C8126D;"}
  }

  ${({ mode }) => mode && "background:#585858;"}
`;
const Icon = styled.img`
  position: absolute;
  right: 10px;
  top: 0px;
  flex: 1;
`;
export { Wrapper, Container, Button, Card, Arrows, Carousel, Icon };
