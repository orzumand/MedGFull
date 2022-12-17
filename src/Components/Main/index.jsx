import React, { useState } from "react";
import Consult from "./Consult";
import Service from "./Service";
import FAQ from "./FAQ";
import Group from "./Group";
import Partner from "./Partner";
import Blog from "./Blog";
import TakeControl from "./TakeControl";
import { Body, Container, Form, Header, Icon, Input, Submit } from "./style";
const Main = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(true);
  };
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
          <Container>
            <Header>
              <div>Записаться онлайн</div>
              <Icon onClick={() => setToggle(false)} />
            </Header>
            <Body>
              <div className="subtitle">ФИО</div>
              <Input type="text" placeholder="Умид Мухторов" />
              <div className="subtitle">Телефон</div>
              <Input placeholder="+998 (97) 123-45-67" />
              <Body.Date>
                <div>
                  <div className="subtitle">Дата</div>
                  <Input placeholder="26 Сентября" />
                </div>
                <div>
                  <div className="subtitle">Время</div>
                  <Input placeholder="14:00" />
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
