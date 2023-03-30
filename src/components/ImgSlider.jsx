import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="/images/slider-badging.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-badag.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scale.jpg" />
      </Wrap>
      <Wrap>
        <img src="/images/slider-scales.jpg" />
      </Wrap>
    </Carousel>
  );
}

export default ImgSlider;

const Carousel = styled(Slider)`
  .slick-list {
    overflow: visible;
  }

  ul li button {
    &::before {
      font-size: 10px;
      color: rgb(150, 158, 174);
    }
  }

  .slick-dots li.slick-active button::before {
    color: white;
  }

  button {
    z-index: 1;
  }
`;
const Wrap = styled.div`
  margin-top: 20px;
  cursor: pointer;
  img {
    border: 4px solid transparent;
    width: 100%;
    border-radius: 5px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0 16px 10px -10px;
    height: 100%;
    transition: all 0.25s;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
