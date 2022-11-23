import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Image from "next/image";

import React from "react";
import Slider from "react-slick";

import styled from "styled-components";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const Card = styled.div`
  width: 100% !important;
  height: 600px;
  object-fit: cover;
  position: relative;
`;

const LeftAr = styled(IoIosArrowBack)`
  height: 100px;
  width: 100px;
  background-color: transparent;
  position: absolute;
  top: calc(50% - 50px);
  z-index: 999;
  cursor: pointer;
  color: white;
  opacity: 0.7;
  left: 0;

  @media (max-width: 1259px) {
    top: calc(50% - 100px);
  }

  @media (max-width: 1059px) {
    top: calc(50% - 130px);
  }
`;

const RightAr = styled(IoIosArrowForward)`
  height: 100px;
  width: 100px;
  background-color: transparent;
  position: absolute;
  top: calc(50% - 50px);
  z-index: 999;
  cursor: pointer;
  color: white;
  opacity: 0.7;
  right: 0;

  @media (max-width: 1259px) {
    top: calc(50% - 100px);
  }

  @media (max-width: 1059px) {
    top: calc(50% - 130px);
  }
`;

export default function SlickCarousel() {
  const data = [
    {
      img: "/img/img-1.jpg",
    },
    {
      img: "/img/img-2.jpg",
    },
    {
      img: "/img/img-3.jpg",
    },
    {
      img: "/img/img-4.jpg",
    },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return <RightAr onClick={onClick} />;
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return <LeftAr onClick={onClick} />;
  }

  return (
    <Slider
      {...settings}
      style={{
        margin: "auto !important",
        width: "90% !important",
        position: "relative !important",
      }}
    >
      {data.map((dataItem, i = { id }) => (
        <Card {...dataItem} key={i} style={{}}>
          <Image
            src={dataItem.img}
            alt=""
            width="1250vw"
            height="610px"
            objectFit="cover"
          />
        </Card>
      ))}
    </Slider>
  );
}
