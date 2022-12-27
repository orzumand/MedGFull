import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: var(--padding);
  padding-top: 64px;
  padding-bottom: 100px;
  background: #ffeffd;
  height: 570px;
  display: flex;
  justify-content: center;
  ${({ mode }) => mode && "background: #1D1D1D;"}
`;
const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  align-items: center;
  gap: 36px;
`;
const Content = styled.div`
  margin-top: -35px;
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

export { Wrapper, Container, Content, Button };
