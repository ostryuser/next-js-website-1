import Image from "next/image";
import React from "react";
import styled from "styled-components";

const AccordionContainer = styled.div`
  width: 100%;
  height: 350px;
  overflow: hidden;
  margin-bottom: 50px;

  @media (max-width: 959px) {
    height: 150vh;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  margin-right: auto;
  margin-left: auto;
  transition: all 1.2s ease;
`;

const ImageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  transition: all 1.2s ease;
  position: relative;

  @media (max-width: 959px) {
    flex-direction: column;
  }
`;

const ImageItemBio = styled.div`
  background: #333;
  opacity: 0;
  position: absolute;
  width: 100%;
  max-height: 250px;
  padding: 1em;
  color: white;
  bottom: 0;
  transition: all 0.2s ease;
  z-index: 999;

  h1 {
    font-family: Montserrat, sans-serif;
    text-transform: uppercase;
    letter-spacing: 10px;
  }

  p {
    font-family: Lora, sans-serif;
    font-weight: 200;
    font-size: 0.8rem;
    width: 100%;
    display: block;
  }
`;

const ImageItem = styled.div`
  width: 25%;
  height: 100%;
  flex: 1;
  transition: all 0.3s ease-in-out;
  transition-delay: 0.1s;
  position: relative;
  overflow: hidden;

  &:hover {
    flex: 5 !important;
  }

  &:hover {
    ${ImageItemBio} {
      opacity: 0.8;
      transition: opacity 2s ease !important;
    }
  }

  @media (max-width: 959px) {
    width: 100%;

    &:hover {
      flex: 1 !important;
    }
  }
`;

const ImageAccordion = () => {
  return (
    <AccordionContainer>
      <Container>
        <ImageContainer>
          <ImageItem>
            <Image
              src="/img/img-1.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
            />
            <ImageItemBio>
              <h1>smart home</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                pariatur qui? Illo dolorum distinctio, id cum repudiandae est
                deserunt similique. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Provident, cumque? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Explicabo, placeat!
              </p>
            </ImageItemBio>
          </ImageItem>
          <ImageItem>
            <Image
              src="/img/img-2.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
            />
            <ImageItemBio>
              <h1>smart home</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                pariatur qui? Illo dolorum distinctio, id cum repudiandae est
                deserunt similique. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Provident, cumque? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Explicabo, placeat!
              </p>
            </ImageItemBio>
          </ImageItem>
          <ImageItem>
            <Image
              src="/img/img-3.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
            />
            <ImageItemBio>
              <h1>smart home</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                pariatur qui? Illo dolorum distinctio, id cum repudiandae est
                deserunt similique. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Provident, cumque? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Explicabo, placeat!
              </p>
            </ImageItemBio>
          </ImageItem>
          <ImageItem>
            <Image
              src="/img/img-4.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
            />
            <ImageItemBio>
              <h1>smart home</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                pariatur qui? Illo dolorum distinctio, id cum repudiandae est
                deserunt similique. Lorem ipsum dolor sit amet consectetur,
                adipisicing elit. Provident, cumque? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Explicabo, placeat!
              </p>
            </ImageItemBio>
          </ImageItem>
        </ImageContainer>
      </Container>
    </AccordionContainer>
  );
};

export default ImageAccordion;
