import React, { useContext, useState } from "react";
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
  PhoneInput,
  NameInput,
  ErrIcon,
  Mode,
} from "./style";
import Logo from "../../Assets/Img/Logo.svg";
import Ru from "../../Assets/Icons/ru.svg";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Remove from "../../Assets/Icons/remove.png";
import Dark from "../../Assets/Icons/dark.png";
import Light from "../../Assets/Icons/light.png";
import { DMode } from "../../Context/context";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [tel, setTel] = useState("");
  const [name, setName] = useState("");
  const [errorname, setErrorname] = useState(true);
  const [errortel, setErrortel] = useState(true);

  const onSubmit = () => {
    name === "" ? setErrorname(false) : setErrorname(true);
    tel.length !== 9 ? setErrortel(false) : setErrortel(true);
  };

  const [mode, setMode] = useContext(DMode);

  const toggleMode = () => {
    setMode(!mode);
    localStorage.setItem("mode", mode);
  };

  const form = (
    <Form>
      <Con mode={mode}>
        <Header mode={mode}>
          <div>Обратный звонок</div>
          <Icon mode={mode} onClick={() => setToggle(false)} />
        </Header>
        <Body mode={mode}>
          <form>
            <div className="subtitle">ФИО</div>
            <NameInput>
              <Input
                mode={mode}
                onChange={({ target: { value } }) => setName(value)}
                name="name"
                type="text"
                placeholder="Умид Мухторов"
              />
              {!errorname ? <ErrIcon src={Remove} /> : ""}
            </NameInput>
            <div className="subtitle">Телефон</div>
            <PhoneInput>
              <PhoneInput.Code mode={mode}>+998</PhoneInput.Code>
              <Input
                mode={mode}
                name="tel"
                type="tel"
                placeholder="(97) 123-45-67"
                onChange={({ target: { value } }) => setTel(value)}
              />
              {!errortel ? <ErrIcon src={Remove} /> : ""}
            </PhoneInput>
            <Submit
              onClick={onSubmit}
              className={name !== "" && tel.length === 9 ? "" : "disable"}
            >
              {name !== "" && tel.length === 9
                ? " Подтвердить"
                : "Необходимо заполнить поля"}
            </Submit>
          </form>
        </Body>
      </Con>
    </Form>
  );
  return (
    <Wrapper>
      <NavbarWrapper mode={mode ? 1 : 0}>
        <Container>
          <img src={Logo} alt="Logo" />
          <Contacts>
            <div>
              <div className="title">+998 (97) 123-45-67</div>
              <div className="subtitle">контактный центр</div>
            </div>
            <Button mode={mode ? 1 : 0}>
              <img src={Ru} alt="Logo" /> Русский
            </Button>
            <Button
              mode={mode ? 1 : 0}
              onClick={() => setToggle(true)}
              type={"first"}
            >
              Обратный звонок
            </Button>
            <Mode onClick={() => toggleMode()} src={!mode ? Dark : Light} />
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
