import React, { useContext, useState } from "react";
import {
  Akkardion,
  Answer,
  Container,
  Dote,
  Feedback,
  Ftitle,
  Icon,
  Item,
  Question,
  Subtitle,
  Title,
  Wrapper,
} from "./style";
import { DMode } from "../../../Context/context";
const FAQ = () => {
  const [btnState, setBtnState] = useState("");

  const handleClick = (num) => {
    setBtnState(num);
  };
  const [darkmode] = useContext(DMode);
  const mode = darkmode ? 1 : 0;
  return (
    <Wrapper mode={mode}>
      <Container>
        <Ftitle mode={mode}>FAQ</Ftitle>
        <Subtitle>Нужны ответы? Найдите их здесь...</Subtitle>
        <Akkardion>
          <Item
            className={btnState === 1 ? "active" : ""}
            onClick={() => handleClick(btnState === 1 ? 0 : 1)}
            mode={mode}
          >
            <Question mode={mode}>
              {btnState === 1 ? <Dote mode={mode} /> : ""}

              <Title mode={mode}>
                Каков порядок прохождения обследования? Нужна ли предварительная
                запись?
              </Title>

              <Icon mode={mode} className={btnState === 1 ? "active" : ""} />
            </Question>
            <Answer mode={mode}>
              Записаться можно следующим образом:
              <br />
              <br />
              Через регистратуру в рабочие часы. Позвонив телефону +998 71 222
              33 33, +998 71 240 20 20, + 99871 333 00 30, а так же по горячей
              линии 1095, звонки принимаем каждый день круглосуточно
            </Answer>
          </Item>
          <Item
            className={btnState === 2 ? "active" : ""}
            onClick={() => handleClick(btnState === 2 ? 0 : 2)}
            mode={mode}
          >
            <Question mode={mode}>
              {btnState === 2 ? <Dote /> : ""}
              <Title mode={mode}>
                Как записаться к узкому специалисту в вашей клинике?
              </Title>

              <Icon mode={mode} className={btnState === 2 ? "active" : ""} />
            </Question>
            <Answer mode={mode}>
              Записаться можно следующим образом:
              <br />
              <br />
              Через регистратуру в рабочие часы. Позвонив телефону +998 71 222
              33 33, +998 71 240 20 20, + 99871 333 00 30, а так же по горячей
              линии 1095, звонки принимаем каждый день круглосуточно
            </Answer>
          </Item>
          <Item
            className={btnState === 3 ? "active" : ""}
            onClick={() => handleClick(btnState === 3 ? 0 : 3)}
            mode={mode}
          >
            <Question mode={mode}>
              {btnState === 3 ? <Dote /> : ""}
              <Title mode={mode}>
                Eсть ли при больнице платный стационар в терапевтическом
                отделении?
              </Title>

              <Icon mode={mode} className={btnState === 3 ? "active" : ""} />
            </Question>
            <Answer mode={mode}>
              Записаться можно следующим образом:
              <br />
              <br />
              Через регистратуру в рабочие часы. Позвонив телефону +998 71 222
              33 33, +998 71 240 20 20, + 99871 333 00 30, а так же по горячей
              линии 1095, звонки принимаем каждый день круглосуточно
            </Answer>
          </Item>
          <Item
            className={btnState === 4 ? "active" : ""}
            onClick={() => handleClick(btnState === 4 ? 0 : 4)}
            mode={mode}
          >
            <Question mode={mode}>
              {btnState === 4 ? <Dote /> : ""}
              <Title mode={mode}>
                Как отменить прежнюю запись к врачу, если я выбрала другое
                время?
              </Title>

              <Icon mode={mode} className={btnState === 4 ? "active" : ""} />
            </Question>
            <Answer mode={mode}>
              Записаться можно следующим образом:
              <br />
              <br />
              Через регистратуру в рабочие часы. Позвонив телефону +998 71 222
              33 33, +998 71 240 20 20, + 99871 333 00 30, а так же по горячей
              линии 1095, звонки принимаем каждый день круглосуточно
            </Answer>
          </Item>
        </Akkardion>
        <Feedback>
          Не смогли найти то, что искали? Напишите нам на
          <a href="/"> medghelp@gmail.com</a>
        </Feedback>
      </Container>
    </Wrapper>
  );
};

export default FAQ;
