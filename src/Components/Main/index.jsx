import React, { useContext, useState } from "react";
import Consult from "./Consult";
import Service from "./Service";
import FAQ from "./FAQ";
import Group from "./Group";
import Partner from "./Partner";
import Blog from "./Blog";
import TakeControl from "./TakeControl";
import { Body, Container, Form, Header, Icon, Input, Submit } from "./style";
import { DMode } from "../../Context/context";
import { useTranslation } from "react-i18next";
// import CRUD from "./CRUD";
const Main = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(true);
  };
  const [darkmode] = useContext(DMode);
  const mode = darkmode ? 1 : 0;
  const { t } = useTranslation();
  return (
    <div>
      {/* <CRUD /> */}
      <Consult handleToggle={handleToggle} />
      <Service />
      <Blog />
      <Group />
      <Partner />
      <FAQ />
      <TakeControl />
      {toggle ? (
        <Form>
          <Container mode={mode}>
            <Header mode={mode}>
              <div>{t("register")}</div>
              <Icon mode={mode} onClick={() => setToggle(false)} />
            </Header>
            <Body>
              <div className="subtitle">{t("fullName")}</div>
              <Input mode={mode} type="text" placeholder="Умид Мухторов" />
              <div className="subtitle">{t("phone")}</div>
              <Input mode={mode} placeholder="+998 (97) 123-45-67" />
              <Body.Date>
                <div>
                  <div className="subtitle">{t("date")}</div>
                  <Input mode={mode} type="date" placeholder="26 Сентября" />
                </div>
                <div>
                  <div className="subtitle">{t("time")}</div>
                  <Input mode={mode} type="time" placeholder="14:00" />
                </div>
              </Body.Date>
              <Submit>{t("confirm")}</Submit>
            </Body>
          </Container>
        </Form>
      ) : (
        ""
      )}
    </div>
  );
};

export default Main;
