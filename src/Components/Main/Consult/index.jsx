import React, { useContext } from "react";
import { Button, Container, Content, Wrapper } from "./style";
import Nurse from "../../../Assets/Img/nurse.svg";
import { DMode } from "../../../Context/context";
const Consult = ({ handleToggle }) => {
  const [darkmode] = useContext(DMode);
  const mode = darkmode ? 1 : 0;
  return (
    <Wrapper mode={mode}>
      <Container>
        <Content mode={mode}>
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
