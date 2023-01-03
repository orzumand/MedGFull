import React, { useContext, useRef } from "react";
import Slider from "react-slick";
import Icon1 from "../../../Assets/Icons/Service1.svg";
import Icon2 from "../../../Assets/Icons/Service2.svg";
import Icon3 from "../../../Assets/Icons/Service3.svg";
import { DMode } from "../../../Context/context";
import { Arrows, Card, Carousel, Container, Icon, Wrapper } from "./style";
const settings = {
  infinite: true,
  centerPadding: "19px",

  slidesToScroll: 1,
  slidesToShow: 3,
  speed: 500,
  width: "100%",
};

const Service = () => {
  const slider = useRef();
  const [darkmode] = useContext(DMode);
  const mode = darkmode ? 1 : 0;
  return (
    <Wrapper mode={mode}>
      <Container mode={mode}>
        <div className={"title"}>Услуги</div>
        <Carousel>
          <Arrows.Left mode={mode} onClick={() => slider.current.slickNext()} />
          <Slider className="slider" ref={slider} {...settings}>
            <div>
              <Card mode={mode}>
                <Icon src={Icon1} />
                <div className="title">
                  Вспомогательные репродуктивные техногонии
                </div>
                <div className="sibtitle">
                  Педиатра, теравевта, невролога, аллерголога, гастроэнтеролога
                  и других высококласных врачей
                </div>
              </Card>
            </div>
            <div>
              <Card mode={mode}>
                <Icon src={Icon2} />
                <div className="title">
                  Вспомогательные репродуктивные техногонии
                </div>
                <div className="sibtitle">
                  Педиатра, теравевта, невролога, аллерголога, гастроэнтеролога
                  и других высококласных врачей
                </div>
              </Card>
            </div>
            <div>
              <Card mode={mode}>
                <Icon src={Icon3} />
                <div className="title">
                  Вспомогательные репродуктивные техногонии
                </div>
                <div className="sibtitle">
                  Педиатра, теравевта, невролога, аллерголога, гастроэнтеролога
                  и других высококласных врачей
                </div>
              </Card>
            </div>
            <div>
              <Card mode={mode}>
                <Icon src={Icon2} />
                <div className="title">
                  Вспомогательные репродуктивные техногонии
                </div>
                <div className="sibtitle">
                  Педиатра, теравевта, невролога, аллерголога, гастроэнтеролога
                  и других высококласных врачей
                </div>
              </Card>
            </div>
          </Slider>
        </Carousel>
      </Container>
    </Wrapper>
  );
};

export default Service;
