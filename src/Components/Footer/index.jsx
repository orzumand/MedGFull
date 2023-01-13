import React from "react";
import { Container, Content, Img, Wrapper } from "./style";
import Logo from "../../Assets/Logo.svg";
import { FaInstagram, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Container>
        <Content>
          <Img src={Logo} />
          <div className="div">
            <div>
              <div className="title">+998 (97) 123-45-67</div>
              <div className="subtitle">{t("callCenter")}</div>
            </div>
            <div>
              <div className="title">medg@gmail.com</div>
              <div className="subtitle">{t("callCenter")}</div>
            </div>
          </div>
        </Content>
        <Content>
          <div className="subtitle">{t("rights")}</div>
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
