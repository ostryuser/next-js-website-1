import React from "react";
import styled from "styled-components";
import SlickCarousel from "../components/SlickCarousel";

const ServicesSection = styled.section`
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 50px;
`;

const CarouselWrap = styled.div`
  width: 100%;
  margin: auto;
  overflow: hidden;
  height: 600px;
  display: flex;

  @media (max-width: 959px) {
    display: none;
  }
`;

const Body = styled.div`
  font-family: Montserrat, sans-serif;
  text-align: center;
  color: #333;
  width: 60%;
  margin: 4em auto;
  margin-bottom: 6em !important;

  h1 {
    font-size: 3rem;
    letter-spacing: 20px;
    text-transform: uppercase;
    margin-bottom: 2em;
  }

  p {
    font-family: Lora, sans-serif;
    font-size: 1rem;
    text-align: center;
  }
`;

const Services = () => {
  return (
    <ServicesSection>
      <Container>
        <CarouselWrap>
          <SlickCarousel style={{ margin: "0" }} />
        </CarouselWrap>
        <Body>
          <h1>NASZE USŁUGI</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
            quos
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
            fuga harum nobis minus odio quam eum quo officiis, veritatis
            consequatur necessitatibus doloribus reprehenderit ratione facere?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            nobis, distinctio dolore odit alias minima.
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
        </Body>
      </Container>
    </ServicesSection>
  );
};

export default Services;
