import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const linearToRight =
  "linear-gradient(to right,rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 1) 31%, rgba(255, 255, 255, 0) 50%,rgba(255, 255, 255, 0) 57%);";

const linearToLeft =
  "linear-gradient(to left,rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 1) 31%, rgba(255, 255, 255, 0) 50%,rgba(255, 255, 255, 0) 57%);";

const CardContainer = styled.section`
  width: 100%;
  height: 75vh;
  max-height: 457px;
  display: flex;
  align-items: center;
  position: relative;

  /* @media (max-width: 959px) {
    max-height: 457px;
    overflow: hidden;
  } */
`;

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  overflow: hidden;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 115%;
  transform: scale(1.15);
`;

const Gradient = styled.div`
  background: ${({ reverse }) => (reverse ? linearToLeft : linearToRight)};

  z-index: 100;
  width: 100%;
  height: 75vh;
  max-height: 457px;
  position: absolute;

  /* @media (max-width: 959px) {
    opacity: 0;
  } */
`;

const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;
  display: flex;
  flex-direction: row;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: ${({ reverse }) => (!reverse ? "flex-start" : "flex-end")};
  width: 50%;
  order: ${({ reverse }) => (!reverse ? "1" : "2")};
  position: relative;
`;

const CardEmpty = styled.div`
  height: 100%;
  width: 50%;
  order: ${({ reverse }) => (!reverse ? "1" : "2")};
`;

const Heading = styled.h1`
  font-size: 2rem;
  letter-spacing: 15px;
  text-transform: uppercase;
  font-family: Montserrat, sans-serif;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

const Desc = styled.p`
  font-family: Lora, sans-serif;
  font-size: 0.9rem;
  text-align: ${({ reverse }) => (!reverse ? "left" : "right")};
  width: 80%;
  /* min-width: 600px; */
`;

const Button = styled.button`
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 5px;
  padding: 1.2em 2.5em;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  border-left: 3px solid black;
  border-right: 3px solid black;
  max-width: 50%;
  margin: 2em auto;
  transition: all 0.3s ease;
  color: black;
  background-color: transparent;
  cursor: pointer;
  position: relative;
  right: ${({ reverse }) => (!reverse ? "170px" : "-170px")};

  &:hover {
    padding: 1.2em 2em;
    background: black;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    color: white;
    transition: padding 0.3s ease, background-color 0.3s ease 0.7s,
      border-top 0.3s ease 0.6s, border-bottom 0.3s ease 0.6s,
      color 0.3s ease 0.7s;
  }
`;

const HomeCard = ({
  heading,
  desc,
  button,
  reverse,
  img,
  buttonURL,
  refresh,
  offset,
  initialOffset,
}) => {
  return (
    <CardContainer>
      <ImageContainer>
        <ImageWrapper>
          <Gradient reverse={reverse}></Gradient>
          <Image
            src={img}
            layout="fill"
            objectFit="cover"
            alt=""
            style={{
              transform: `translateY(${(offset - initialOffset) * 0.2}px)`,
            }}
          />
        </ImageWrapper>
      </ImageContainer>
      <Container>
        <CardWrapper reverse={reverse}>
          <Heading>{heading}</Heading>
          {desc ? <Desc reverse={reverse}>{desc}</Desc> : null}
          {button ? (
            <>
              {refresh ? (
                <Button reverse={reverse}>
                  <a href={buttonURL}>{button}</a>
                </Button>
              ) : (
                <Link href={buttonURL}>
                  <Button reverse={reverse}>{button}</Button>
                </Link>
              )}
            </>
          ) : null}
        </CardWrapper>
        <CardEmpty />
      </Container>
    </CardContainer>
  );
};

export default HomeCard;
