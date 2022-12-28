import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: var(--padding);
  height: 313px;
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
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export { Wrapper, Img, Container };
