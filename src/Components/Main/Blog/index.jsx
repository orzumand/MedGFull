import React, { useContext } from "react";
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
import { DMode } from "../../../Context/context";
import Blogs from "../../../Assets/Img/Blog.jpg";
import { useTranslation } from "react-i18next";
const Blog = () => {
  const [darkmode] = useContext(DMode);
  const mode = darkmode ? 1 : 0;
  const { t } = useTranslation();
  return (
    <Wrapper mode={mode}>
      <Container mode={mode}>
        <div className="title">{t("blog")}</div>
        <Content>
          <Left mode={mode}>
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
              <CardTitle mode={mode}>
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
              <CardTitle mode={mode}>
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
              <CardTitle mode={mode}>
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
              <CardTitle mode={mode}>
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
