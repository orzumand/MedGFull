import React, { useContext, useState } from "react";
import usa from "../../Assets/Icons/usa.png";
import uzbekistan from "../../Assets/Icons/uzbekistan.png";
import russia from "../../Assets/Icons/russia.png";
import { Body, Button, Container, Option } from "./style.js";
import { DMode } from "../../Context/context";
import { useTranslation } from "react-i18next";
const Select = () => {
  const Item = [
    { name: "Русский", img: russia, lng: "ru" },
    { name: "English", img: usa, lng: "en" },
    { name: "Uzbekcha", img: uzbekistan, lng: "uz" },
  ];
  const [darkmode] = useContext(DMode);
  const mode = darkmode ? 1 : 0;

  const [open, setOpen] = useState(0);
  const [index, setIndex] = useState(0);
  const { i18n } = useTranslation();

  const changeLanguage = (language, index) => {
    i18n.changeLanguage(language);
    setOpen(open === 0 ? 1 : 0);
    setIndex(index);
  };
  return (
    <Container>
      <Button onClick={() => setOpen(open === 0 ? 1 : 0)} mode={mode}>
        <img src={Item[index].img} alt="Img" /> {Item[index].name}
      </Button>
      <Body className={open ? "" : "body"} mode={mode}>
        {Item.map((value, index) => {
          return (
            <Option onClick={() => changeLanguage(value.lng, index)}>
              <img src={value.img} alt="img" />
              {value.name}
            </Option>
          );
        })}
      </Body>
    </Container>
  );
};

export default Select;
