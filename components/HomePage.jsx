import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeCard from "./HomeCard";
import HomeCardMobile from "./HomeCardMobile";
import ScrollToTop from "./ScrollToTop";

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  /* max-height: calc(5 * 457px); */
  margin: auto;
  margin-top: 50px;

  @media (max-width: 959px) {
    display: none;
  }
`;

const HomeContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1600px;
  margin-top: 0;
  margin: auto;

  @media (min-width: 959px) {
    display: none;
  }
`;

const HomePage = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]);

  const data = [
    {
      id: 0,
      heading: "Profesjonalne usługi w zakresie elektryki",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, tempora placeat. Iste sequi beatae sed provident odit rem quisquam dolore eligendi, rerum, porro, quam distinctio minus consequuntur cupiditate deserunt nesciunt?",
      button: false,
      reverse: false,
      img: "/img/img-1.jpg",
      refresh: false,
    },
    {
      id: 1,
      heading: "Nasze usługi",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, tempora placeat. Iste sequi beatae sed provident odit rem quisquam dolore eligendi",
      button: "Odkryj",
      reverse: true,
      img: "/img/img-2.jpg",
      buttonURL: "/services",
      refresh: true,
    },
    {
      id: 2,
      heading: "Smart Dom",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, tempora placeat. Iste sequi beatae sed",
      button: "Smart Dom",
      reverse: false,
      img: "/img/img-3.jpg",
      buttonURL: "/smartHome",
      refresh: false,
    },
    {
      id: 3,
      heading: "Galeria",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, tempora placeat. Iste sequi beatae sed provident odit rem quisquam dolore eligendi, rerum, porro, quam distinctio minus consequuntur cupiditate deserunt nesciunt?",
      button: "Galeria",
      reverse: true,
      img: "/img/img-4.jpg",
      buttonURL: "/gallery",
      refresh: false,
    },
    {
      id: 4,
      heading: "Kontakt",
      desc: false,
      button: "Kontakt",
      reverse: false,
      img: "/img/img-5.jpg",
      buttonURL: "/contact",
      refresh: false,
    },
  ];
  return (
    <>
      <HomeContainer>
        <ScrollToTop />
        {data.map((dataItem, i = { id }) => (
          <HomeCard
            {...dataItem}
            offset={offset}
            initialOffset={i * 550}
            key={i}
          />
        ))}
      </HomeContainer>
      <HomeContainerMobile>
        {data.map((dataItem, i = { id }) => (
          <HomeCardMobile {...dataItem} key={i} />
        ))}
      </HomeContainerMobile>
    </>
  );
};

export default HomePage;
