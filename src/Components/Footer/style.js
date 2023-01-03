import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: var(--padding);
  background-color: #211b1e;
  height: 176px;
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

const Img = styled.img`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
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

    text-align: right;

    color: #bcbcbc;
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
  }
  .icons {
    display: flex;
    gap: 24px;
  }
`;
export { Wrapper, Img, Container, Content };
