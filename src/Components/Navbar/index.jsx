import React from "react";
import { Button, Contacts, Container, Wrapper } from "./style";
import Logo from "../../Assets/Img/Logo.svg";
import Ru from "../../Assets/Icons/ru.svg";
const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <img src={Logo} alt="Logo" />
        <Contacts>
          <div>
            <div className="title">+998 (97) 123-45-67</div>
            <div className="subtitle">контактный центр</div>
          </div>
          <Button>
            <img src={Ru} alt="Logo" /> Русский</Button>
          <Button type={"first"}>Обратный звонок</Button>
        </Contacts>
      </Container>
    </Wrapper>
  );
};

export default Navbar;
