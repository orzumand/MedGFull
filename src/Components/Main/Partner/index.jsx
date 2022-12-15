import React from "react";

import { Container, Img, Wrapper } from "./style";
import Partners from "../../../Assets/Img/Partner.svg";

const Partner = () => {
  return (
    <Wrapper>
      <Container>
        <div className="title">Наше партнеры</div>
        <Img src={Partners} />
      </Container>
    </Wrapper>
  );
};

export default Partner;
