import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: var(--padding);
  height: 741px;
  @media (max-width: 1400px) {
    padding: 0px 20px;
  }
  @media (max-width: 760px) {
    padding: 0px 10px;
  }
  ${({ mode }) => mode && "background:#1D1D1D;"}
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
    ${({ mode }) => mode && "color:#ffffff;"}
  }
`;

const Img = styled.img`
  border-radius: 28px;
`;

const Content = styled.div`
  height: 590px;
  width: 100%;
  gap: 20px;
  display: flex;
`;
const Left = styled.div`
  max-width: 590px;
  border-radius: 24px;
  cursor: pointer;

  Img {
    height: 383px;
    width: 100%;
  }
  .title {
    margin-top: 24px;
    margin-bottom: 16px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;

    /* Light/black */

    color: #402c36;
    ${({ mode }) => mode && "color:#ffffff;"}
  }
  .subtitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 130%;
    /* or 19px */

    /* Light/sec */

    color: #c2b7bd;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Card = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  min-width: 550px;
  height: 120px;
  border-radius: 20px;
  cursor: pointer;
  Img {
    height: 120px;
    width: 183px;
    @media (max-width: 760px) {
      height: 100px;
      width: 163px;
    }
  }
  /* :hover {
    box-shadow: -1px 1px 35px 11px rgba(34, 60, 80, 0.2);
  } */
  @media (max-width: 1000px) {
    width: 100%;
    min-width: 0px;
    gap: 10px;
    overflow: hidden;
  }
`;
const CardTitle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 23px;

    @media (max-width: 760px) {
      font-size: 16px;
      line-height: 16px;
    }
    /* Light/black */

    color: #402c36;
    margin-bottom: 8px;
    ${({ mode }) => mode && "color:#ffffff;"}
  }
  .subtitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 130%;
    /* or 17px */

    /* Light/sec */

    color: #c2b7bd;
    @media (max-width: 760px) {
      font-size: 11px;
    }
  }
`;
export { Wrapper, Img, Container, Content, Left, Right, Card, CardTitle };
