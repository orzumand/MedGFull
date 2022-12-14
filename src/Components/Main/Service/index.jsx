import React, { useRef } from "react";
import Slider from "react-slick";
import { Arrows, Card, Carousel, Container, Wrapper } from "./style";
const settings = {
  // dots: true,
  // infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerPadding: "19px",
  center: true,
};
const Service = () => {
  const slider = useRef();
  return (
    <Wrapper>
      <Container>
        <div className={"title"}>Услуги</div>
        <Carousel>
          <Arrows.Right onClick={() => slider.current.slickPrev()} />
          <Arrows.Left onClick={() => slider.current.slickNext()} />
          <Slider ref={slider} {...settings}>
            <div>
              <Card></Card>
            </div>
            <div>
              <Card></Card>
            </div>
            <div>
              <Card></Card>
            </div>
            <div>
              <Card></Card>
            </div>
          </Slider>
        </Carousel>
      </Container>
    </Wrapper>
  );
};

export default Service;
