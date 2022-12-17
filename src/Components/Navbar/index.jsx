import React, { useState } from "react";
import {
  Body,
  Button,
  Con,
  Contacts,
  Container,
  Form,
  Header,
  Icon,
  Input,
  NavbarWrapper,
  Submit,
  Wrapper,
} from "./style";
import Logo from "../../Assets/Img/Logo.svg";
import Ru from "../../Assets/Icons/ru.svg";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const form = (
    <Form>
      <Con>
        <Header>
          <div>Обратный звонок</div>
          <Icon onClick={() => setToggle(false)} />
        </Header>
        <Body>
          <div className="subtitle">ФИО</div>
          <Input type="text" placeholder="Умид Мухторов" />
          <div className="subtitle">Телефон</div>
          <Input placeholder="+998 (97) 123-45-67" />
          <Submit>Подтвердить</Submit>
        </Body>
      </Con>
    </Form>
  );
  return (
    <Wrapper>
      <NavbarWrapper>
        <Container>
          <img src={Logo} alt="Logo" />
          <Contacts>
            <div>
              <div className="title">+998 (97) 123-45-67</div>
              <div className="subtitle">контактный центр</div>
            </div>
            <Button>
              <img src={Ru} alt="Logo" /> Русский
            </Button>
            <Button onClick={() => setToggle(true)} type={"first"}>
              Обратный звонок
            </Button>
          </Contacts>
        </Container>
      </NavbarWrapper>
      <Outlet />
      <Footer />

      {toggle ? form : ""}
    </Wrapper>
  );
};

export default Navbar;
