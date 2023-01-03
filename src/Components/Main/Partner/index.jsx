import React, { useContext } from "react";
import { DMode } from "../../../Context/context";
import { Container, Img, Wrapper } from "./style";
import Partners from "../../../Assets/Img/Partner.svg";

const Partner = () => {
  const [darkmode] = useContext(DMode);
  const mode = darkmode ? 1 : 0;
  return (
    <Wrapper mode={mode}>
      <Container mode={mode}>
        <div className="title">Наше партнеры</div>
        <Img src={Partners} />
      </Container>
    </Wrapper>
  );
};

export default Partner;
