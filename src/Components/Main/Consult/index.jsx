import React from "react";
import { Button, Container, Content, Wrapper } from "./style";
import Nurse from "../../../Assets/Img/nurse.svg";
const Consult = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <div className="maintitle">
            Консультация врача в любое время и в любом месте по звонку
          </div>
          <div className="subtitle">
            Педиатра, теравевта, невролога, аллерголога, гастроэнтеролога и
            других высококласных врачей
          </div>
          <Button>Записаться онлайн</Button>
        </Content>
        <img src={Nurse} alt="IMG" />
      </Container>
    </Wrapper>
  );
};

export default Consult;
