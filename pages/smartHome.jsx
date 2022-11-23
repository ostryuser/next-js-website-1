import React from "react";
import styled from "styled-components";
import ImageAccordion from "../components/ImageAccordion";

const SmartHomeSection = styled.section`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: column;
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

const SmartHome = () => {
  return (
    <div>
      <SmartHomeSection>
        <Container>
          <Body>
            <h1>SMART DOM</h1>
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
          <ImageAccordion />
        </Container>
      </SmartHomeSection>
    </div>
  );
};

export default SmartHome;
