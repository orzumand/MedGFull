import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: var(--padding);
  height: 400px;
  ${({ mode }) => mode && "background:#252424;"}
  @media (max-width: 1400px) {
    padding: 0px 20px;
    height: 440px;
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
  gap: 36px;
  padding: 64px 0px;
  @media (max-width: 760px) {
    padding: 34px 0px;
    gap: 25px;
  }
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 37px;
    line-height: 45px;
    /* identical to box height */

    /* Light/black */
    @media (max-width: 760px) {
      font-size: 30px;
    }
    @media (max-width: 560px) {
      font-size: 22px;
      line-height: 25px;
    }
    color: #402c36;
    ${({ mode }) => mode && "color:#ffffff;"}
  }
`;

const Img = styled.img`
  position: absolute;
  right: -800px;
  top: 25px;
  transform: translate(-50%, -50%);
  width: 453.1px;
  height: 507px;
  @media (max-width: 1400px) {
    display: none;
  }
`;
const Content = styled.div`
  position: relative;
  max-width: 754px;
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;

    color: #000000;
    margin-bottom: 4px;
    @media (max-width: 760px) {
      font-size: 14px;
    }
    @media (max-width: 560px) {
      font-size: 13px;
    }
    ${({ mode }) => mode && "color:#ffffff;"}
  }
  .subtitle {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;

    color: #8c8b8b;
    margin-bottom: 16px;
    @media (max-width: 760px) {
      font-size: 13px;
    }
    @media (max-width: 560px) {
      font-size: 12px;
    }
    ${({ mode }) => mode && "color:##8C8B8B;"}
  }
`;
export { Wrapper, Img, Container, Content };
