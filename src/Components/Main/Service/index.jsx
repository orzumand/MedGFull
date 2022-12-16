import React, { useRef } from "react";
import Slider from "react-slick";
import Icon1 from "../../../Assets/Icons/Service1.svg";
import Icon2 from "../../../Assets/Icons/Service2.svg";
import Icon3 from "../../../Assets/Icons/Service3.svg";
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
  return (
    <Wrapper>
      <Container>
        <div className={"title"}>Услуги</div>
        <Carousel>
          <Arrows.Left onClick={() => slider.current.slickNext()} />
          <Slider className="slider" ref={slider} {...settings}>
            <div>
              <Card>
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
              <Card>
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
              <Card>
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
              <Card>
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
