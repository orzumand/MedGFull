import styled from "styled-components";
import { ReactComponent as Arrow } from "../../../Assets/Icons/Vector.svg";
const Wrapper = styled.div`
  width: 100%;
  padding: var(--padding);
  background: #f8f8f8;
  height: 443px;
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
  width: 386px;
  height: 224px;
  background-color: yellow;
  border-radius: 12px;
`;

const Arrows = styled.div``;

const Carousel = styled.div`
  position: relative;
`;
Arrows.Right = styled(Arrow)`
  width: 44px;
  height: 44px;
  background: rgba(231, 40, 135, 0.1);
  padding: 13px;
  border-radius: 50%;
  transform: rotate(90deg);
  & path {
    stroke: #e72887;
  }
  position: absolute;
  z-index: 1;
  top: 45%;
  left: -45px;
`;
Arrows.Left = styled(Arrow)`
  width: 44px;
  height: 44px;
  background: rgba(231, 40, 135, 0.1);
  padding: 13px;
  border-radius: 50%;
  transform: rotate(270deg);
  & path {
    stroke: #e72887;
  }
  position: absolute;
  z-index: 1;
  right: 0;
  top: 45%;
`;
export { Wrapper, Container, Button, Card, Arrows, Carousel };
