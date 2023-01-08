import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: var(--padding);
  background-color: #211b1e;
  height: 176px;
  @media (max-width: 1000px) {
    padding: 0px 50px;
  }
  @media (max-width: 760px) {
    padding: 0px 10px;
  }
`;
const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  justify-content: center;
  margin: auto;
  flex-direction: column;
  gap: 52px;
  padding: 34px 0px;
  @media (max-width: 760px) {
    padding: 20px 0px;
    gap: 15px;
  }

  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 37px;
    line-height: 45px;
    /* identical to box height */

    /* Light/black */

    color: #402c36;
    @media (max-width: 760px) {
      font-size: 30px;
    }
  }
`;

const Img = styled.img`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  @media (max-width: 760px) {
    width: 110px;
    margin-bottom: 10px;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 760px) {
    flex-direction: column;
  }
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 19px;
    text-align: right;

    color: #ffffff;
  }
  .subtitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    text-align: center;

    color: #bcbcbc;
    @media (max-width: 760px) {
      font-size: 8px;
    }
  }
  .div {
    display: flex;
    gap: 20px;
    text-align: center;
  }
  .icons * {
    width: 24px;
    height: 24px;
    color: #bcbcbc;
    @media (max-width: 760px) {
      width: 20px;
      height: 20px;
    }
  }
  .icons {
    display: flex;
    justify-content: center;
    gap: 24px;
  }
`;
export { Wrapper, Img, Container, Content };
