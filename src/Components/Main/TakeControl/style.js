import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: var(--padding);

  height: 400px;
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

const Img = styled.img`
  position: absolute;
  right: -800px;
  top: 25px;
  transform: translate(-50%, -50%);
  width: 453.1px;
  height: 507px;
`;
const Content = styled.div`
  position: relative;
  width: 754px;
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;

    color: #000000;
    margin-bottom: 4px;
  }
  .subtitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;

    color: #8c8b8b;
    margin-bottom: 16px;
  }
`;
export { Wrapper, Img, Container, Content };
