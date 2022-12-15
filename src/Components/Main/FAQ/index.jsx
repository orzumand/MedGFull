import React, { useState } from "react";
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

const FAQ = () => {
  const [btnState, setBtnState] = useState("");

  const handleClick = (num) => {
    setBtnState(num);
  };

  return (
    <Wrapper>
      <Container>
        <Ftitle>FAQ</Ftitle>
        <Subtitle>Нужны ответы? Найдите их здесь...</Subtitle>
        <Akkardion>
          <Item
            className={btnState === 1 ? "active" : ""}
            onClick={() => handleClick(btnState === 1 ? 0 : 1)}
          >
            <Question>
              {btnState === 1 ? <Dote /> : ""}

              <Title>
                Каков порядок прохождения обследования? Нужна ли предварительная
                запись?
              </Title>

              <Icon className={btnState === 1 ? "active" : ""} />
            </Question>
            <Answer>
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
          >
            <Question>
              {btnState === 2 ? <Dote /> : ""}
              <Title>
                Как записаться к узкому специалисту в вашей клинике?
              </Title>

              <Icon className={btnState === 2 ? "active" : ""} />
            </Question>
            <Answer>
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
          >
            <Question>
              {btnState === 3 ? <Dote /> : ""}
              <Title>
                Подскажите, есть ли при больнице платный стационар в
                терапевтическом отделении? И, если есть, то как в него попасть?
              </Title>

              <Icon className={btnState === 3 ? "active" : ""} />
            </Question>
            <Answer>
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
          >
            <Question>
              {btnState === 4 ? <Dote /> : ""}
              <Title>
                Как отменить прежнюю запись к врачу, если я выбрала другое
                время?
              </Title>

              <Icon className={btnState === 4 ? "active" : ""} />
            </Question>
            <Answer>
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
