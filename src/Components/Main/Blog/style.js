import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  padding: var(--padding);

  height: 741px;
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
  border-radius: 28px;
`;

const Content = styled.div`
  height: 590px;
  width: 100%;
  gap: 20px;
  display: flex;
`;
const Left = styled.div`
  flex: 1;

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
  height: 120px;

  Img {
    height: 120px;
    width: 183px;
  }
`;
const CardTitle = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 19px;
    line-height: 23px;

    /* Light/black */

    color: #402c36;
    margin-bottom: 8px;
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
  }
`;
export { Wrapper, Img, Container, Content, Left, Right, Card, CardTitle };