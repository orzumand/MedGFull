import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: var(--padding);
  padding-top: 64px;
  padding-bottom: 100px;
  background: #ffeffd;
  height: 570px;
  display: flex;

  @media (max-width: 1000px) {
    padding: 0px 50px;
  }
  @media (max-width: 760px) {
    padding: 0px 10px;
  }
  ${({ mode }) => mode && "background: #1D1D1D;"}
`;
const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  gap: 36px;

  img {
    @media (max-width: 760px) {
      position: absolute;
      z-index: 1;
      width: 99%;
    }
  }
  @media (max-width: 760px) {
    justify-content: center;
  }
`;
const Content = styled.div`
  z-index: 2;
  margin-top: -35px;
  width: 645px;
  /* border: 1px solid red; */

  .maintitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 52px;
    @media (max-width: 1000px) {
      font-size: 32px;
      line-height: 38px;
    }
    @media (max-width: 760px) {
      font-size: 28px;
      line-height: 38px;
    }
    /* Light/black */
    color: #402c36;

    ${({ mode }) => mode && "color: #ffffff;"}
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
    @media (max-width: 1000px) {
      font-size: 15px;
      line-height: 100%;
    }
    @media (max-width: 760px) {
      font-size: 15px;
      line-height: 100%;
      color: #402c36;
      ${({ mode }) => mode && "color: #ffffff;"}
    }
    ${({ mode }) => mode && "color: ##C2B7BD;"}
  }
  @media (max-width: 760px) {
    background-color: #ffffffc2;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 0px;
    border-radius: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: -100px;
    ${({ mode }) => mode && "background-color: #402c38e8;"}
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

export { Wrapper, Container, Content, Button };
