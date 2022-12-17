import React from "react";
import { Container, Content, Img, Wrapper } from "./style";
import Logo from "../../Assets/Logo.svg";
import { FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Content>
          <Img src={Logo} />
          <div className="div">
            <div>
              <div className="title">+998 (97) 123-45-67</div>
              <div className="subtitle">контактный центр</div>
            </div>
            <div>
              <div className="title">medg@gmail.com</div>
              <div className="subtitle">контактный центр</div>
            </div>
          </div>
        </Content>
        <Content>
          <div className="subtitle">
            © Все права защищены 2022. Частный медицинский центр MedG
          </div>
          <div className="icons">
            <FaInstagram />
            <FaTelegramPlane />
            <FaTwitter />
          </div>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Footer;
