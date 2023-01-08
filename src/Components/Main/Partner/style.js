import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: var(--padding);
  height: 313px;
  ${({ mode }) => mode && "background:#1D1D1D;"}
  @media (max-width: 1400px) {
    padding: 0px 20px;
  }
  @media (max-width: 760px) {
    padding: 0px 10px;
    height: 200px;
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
    color: #402c36;
    ${({ mode }) => mode && "color:#ffffff;"}
  }
  @media (max-width: 760px) {
    padding: 34px 0px;
  }
`;

const Img = styled.img`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export { Wrapper, Img, Container };
