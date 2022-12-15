import React, { useRef } from "react";
import Slider from "react-slick";
import { Arrows, Card, Carousel, Container, Img, Wrapper } from "./style";
import User from "../../../Assets/Img/User1.svg";
const settings = {
  infinite: true,
  centerPadding: "19px",
  slidesToScroll: 1,
  slidesToShow: 4,
  speed: 500,
  width: "100%",
};
const Group = () => {
  const slider = useRef();
  return (
    <Wrapper>
      <Container>
        <div className={"title"}>Наша команда</div>
        <Carousel>
          <Arrows.Left onClick={() => slider.current.slickNext()} />
          <Slider className="slider" ref={slider} {...settings}>
            <div>
              <Card>
                <Img src={User} />
                <div className="title">Алявия Феруза Анварбековна</div>
                <div className="subtitle">
                  Главный врач - терапевт, гастроэнтеролог
                </div>
              </Card>
            </div>
            <div>
              <Card>
                <Img src={User} />
                <div className="title">Алявия Феруза Анварбековна</div>
                <div className="subtitle">
                  Главный врач - терапевт, гастроэнтеролог
                </div>
              </Card>
            </div>
            <div>
              <Card>
                <Img src={User} />
                <div className="title">Алявия Феруза Анварбековна</div>
                <div className="subtitle">
                  Главный врач - терапевт, гастроэнтеролог
                </div>
              </Card>
            </div>
            <div>
              <Card>
                <Img src={User} />
                <div className="title">Алявия Феруза Анварбековна</div>
                <div className="subtitle">
                  Главный врач - терапевт, гастроэнтеролог
                </div>
              </Card>
            </div>
            <div>
              <Card>
                <Img src={User} />
                <div className="title">Алявия Феруза Анварбековна</div>
                <div className="subtitle">
                  Главный врач - терапевт, гастроэнтеролог
                </div>
              </Card>
            </div>
          </Slider>
        </Carousel>
      </Container>
    </Wrapper>
  );
};

export default Group;
