import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: var(--padding);
  background: #f8f8f8;
  height: 443px;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
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
const Content = styled.div`
  width: 645px;
  .maintitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 52px;

    /* Light/black */

    color: #402c36;
  }
  .subtitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 130%;
    /* or 22px */

    /* Light/sec */

    color: #c2b7bd;
    margin: 38px 0px 24px 0px;
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
  width: 387px;
  height: 224px;
  background-color: yellow;
  border-radius: 12px;
`;
export { Wrapper, Container, Content, Button, Card };
