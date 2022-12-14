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
  MobileContacts,
} from "./style";
import Logo from "../../Assets/Img/Logo.svg";
import Ru from "../../Assets/Icons/ru.svg";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Remove from "../../Assets/Icons/remove.png";
import Dark from "../../Assets/Icons/dark.png";
import Light from "../../Assets/Icons/light.png";
import { DMode } from "../../Context/context";
import { Drawer } from "antd";
import Menu from "../../Assets/Icons/menu.png";
import Recall from "../../Assets/Icons/recall.png";
const Navbar = () => {
  const [toggle, setToggle] = useState(0);
  const [tel, setTel] = useState("");
  const [name, setName] = useState("");
  const [errorname, setErrorname] = useState(true);
  const [errortel, setErrortel] = useState(true);
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const onSubmit = () => {
    name === "" ? setErrorname(false) : setErrorname(true);
    tel.length !== 9 ? setErrortel(false) : setErrortel(true);
  };

  const [mode, setMode] = useContext(DMode);

  const toggleMode = () => {
    setMode(!mode);
    localStorage.setItem("mode", mode);
  };
  const darkmode = mode ? 1 : 0;
  const form = (
    <Form>
      <Con mode={darkmode}>
        <Header mode={darkmode}>
          <div>Обратный звонок</div>
          <Icon mode={darkmode} onClick={() => setToggle(0)} />
        </Header>
        <Body mode={darkmode}>
          <form>
            <div className="subtitle">ФИО</div>
            <NameInput>
              <Input
                mode={darkmode}
                onChange={({ target: { value } }) => setName(value)}
                name="name"
                type="text"
                placeholder="Умид Мухторов"
              />
              {!errorname ? <ErrIcon src={Remove} /> : ""}
            </NameInput>
            <div className="subtitle">Телефон</div>
            <PhoneInput>
              <PhoneInput.Code mode={darkmode}>+998</PhoneInput.Code>
              <Input
                mode={darkmode}
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
      <NavbarWrapper mode={darkmode}>
        <Container>
          <Button className="Mobi" onClick={showDrawer}>
            <img src={Menu} alt="alt" />
          </Button>
          <Drawer
            title="Контакт"
            placement="left"
            onClose={onClose}
            open={open}
          >
            <MobileContacts>
              <div>
                <div className="title">+998 (97) 123-45-67</div>
                <div className="subtitle">контактный центр</div>
              </div>

              <Button mode={darkmode}>
                <img src={Ru} alt="Logo" /> Русский
              </Button>
              <Mode
                className="Mobi"
                onClick={() => toggleMode()}
                src={!mode ? Dark : Light}
              />
            </MobileContacts>
          </Drawer>

          <img src={Logo} alt="Logo" />
          <Contacts>
            <div>
              <div className="title">+998 (97) 123-45-67</div>
              <div className="subtitle">контактный центр</div>
            </div>
            <Button mode={darkmode}>
              <img src={Ru} alt="Logo" /> Русский
            </Button>
            <Button
              mode={darkmode}
              onClick={() => setToggle(true)}
              type={"first"}
            >
              Обратный звонок
            </Button>
            <Mode onClick={() => toggleMode()} src={!mode ? Dark : Light} />
          </Contacts>
          <div className="Mobi">
            <Button onClick={() => setToggle(1)} type={"first"}>
              <img src={Recall} alt="alt" />
            </Button>
          </div>
        </Container>
      </NavbarWrapper>
      <Outlet />
      <Footer />

      {toggle ? form : ""}
    </Wrapper>
  );
};

export default Navbar;
