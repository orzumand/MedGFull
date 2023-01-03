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
const Main = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(true);
  };
  const [darkmode] = useContext(DMode);
  const mode = darkmode ? 1 : 0;
  return (
    <div>
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
              <div>Записаться онлайн</div>
              <Icon mode={mode} onClick={() => setToggle(false)} />
            </Header>
            <Body>
              <div className="subtitle">ФИО</div>
              <Input mode={mode} type="text" placeholder="Умид Мухторов" />
              <div className="subtitle">Телефон</div>
              <Input mode={mode} placeholder="+998 (97) 123-45-67" />
              <Body.Date>
                <div>
                  <div className="subtitle">Дата</div>
                  <Input mode={mode} type="date" placeholder="26 Сентября" />
                </div>
                <div>
                  <div className="subtitle">Время</div>
                  <Input mode={mode} type="time" placeholder="14:00" />
                </div>
              </Body.Date>
              <Submit>Подтвердить</Submit>
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
