import React from "react";

import {
  Card,
  CardTitle,
  Container,
  Content,
  Img,
  Left,
  Right,
  Wrapper,
} from "./style";
// import Partners from "../../../Assets/Img/Partner.svg";
import Blogs from "../../../Assets/Img/Blog.svg";
const Blog = () => {
  return (
    <Wrapper>
      <Container>
        <div className="title">Блог о здоровье</div>
        <Content>
          <Left>
            <Img src={Blogs} />
            <div className="title">
              Стома: уход, калоприемники и их использование, диета, полезные
              советы
            </div>
            <div className="subtitle">
              Искусственное отверстие в кишке, сформированное хирургическим
              путем после удаления всего кишечника или его части, которое
              выведено на переднюю брюшную...
            </div>
          </Left>
          <Right>
            <Card>
              <Img src={Blogs} />
              <CardTitle>
                <div className="title">
                  Стома: уход, калоприемники и их использование, диета, полезные
                </div>
                <div className="subtitle">
                  Искусственное отверстие в кишке, сформированное хирургическим
                  путем после удаления всего кишечника или его части, которое
                  выведено на переднюю брюшную...
                </div>
              </CardTitle>
            </Card>
            <Card>
              <Img src={Blogs} />
              <CardTitle>
                <div className="title">
                  Стома: уход, калоприемники и их использование, диета, полезные
                </div>
                <div className="subtitle">
                  Искусственное отверстие в кишке, сформированное хирургическим
                  путем после удаления всего кишечника или его части, которое
                  выведено на переднюю брюшную...
                </div>
              </CardTitle>
            </Card>
            <Card>
              <Img src={Blogs} />
              <CardTitle>
                <div className="title">
                  Стома: уход, калоприемники и их использование, диета, полезные
                </div>
                <div className="subtitle">
                  Искусственное отверстие в кишке, сформированное хирургическим
                  путем после удаления всего кишечника или его части, которое
                  выведено на переднюю брюшную...
                </div>
              </CardTitle>
            </Card>
            <Card>
              <Img src={Blogs} />
              <CardTitle>
                <div className="title">
                  Стома: уход, калоприемники и их использование, диета, полезные
                </div>
                <div className="subtitle">
                  Искусственное отверстие в кишке, сформированное хирургическим
                  путем после удаления всего кишечника или его части, которое
                  выведено на переднюю брюшную...
                </div>
              </CardTitle>
            </Card>
          </Right>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Blog;
