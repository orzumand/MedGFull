import React from "react";
import Slider from "react-slick";
import { Card, Container, Wrapper } from "./style";
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};
const Service = () => {
  return (
    <Wrapper>
      <Container>
        <div className={"title"}>Услуги</div>

        <Slider {...settings}>
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
      </Container>
    </Wrapper>
  );
};

export default Service;
