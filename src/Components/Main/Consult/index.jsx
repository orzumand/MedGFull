import React from "react";
import { Button, Container, Content, Wrapper } from "./style";
import Nurse from "../../../Assets/Img/nurse.svg";
const Consult = ({ handleToggle }) => {
  const mode = JSON.parse(localStorage.getItem("mode"));

  return (
    <Wrapper mode={mode ? 1 : 0}>
      <Container>
        <Content>
          <div className="maintitle">
            Консультация врача в любое время и в любом месте по звонку
          </div>
          <div className="subtitle">
            Педиатра, теравевта, невролога, аллерголога, гастроэнтеролога и
            других высококласных врачей
          </div>
          <Button onClick={() => handleToggle()}>Записаться онлайн</Button>
        </Content>
        <img src={Nurse} alt="IMG" />
      </Container>
    </Wrapper>
  );
};

export default Consult;
