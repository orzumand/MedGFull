import React, { useContext } from "react";
import { Container, Content, Img, Wrapper } from "./style";
import Phone from "../../../Assets/Img/Phone.svg";
import { DMode } from "../../../Context/context";

const TakeControl = () => {
  const [darkmode] = useContext(DMode);
  const mode = darkmode ? 1 : 0;
  return (
    <Wrapper mode={mode}>
      <Container mode={mode}>
        <div className="title">Возьмите под контроль свое здоровье</div>
        <Content mode={mode}>
          <div className="title">Быстрый и осторожный опыт</div>
          <div className="subtitle">
            Прием в Мелио длится всего 15 минут и проводится с экспертом,
            который тщательно берет образец самого высокого качества и
            поддерживает вас на протяжении всего времени.
          </div>
          <div className="title">Качественные результаты</div>
          <div className="subtitle">
            Ваша кровь анализируется в крупнейших лабораториях Европы, что
            гарантирует высокую точность результатов.
          </div>
          <div className="title">Рекомендации для вас</div>
          <div className="subtitle">
            Ваши результаты сопровождаются персональными рекомендациями от нашей
            команды экспертов, чтобы вы могли начать свое личное и значимое
            путешествие к здоровью.
          </div>
          <Img src={Phone} />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default TakeControl;
