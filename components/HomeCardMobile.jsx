import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const CardContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
`;
const Container = styled.div`
  height: 50%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3em;
`;

const Heading = styled.h1`
  width: 70%;
  font-size: 1.4rem;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-family: Montserrat, sans-serif;
  text-align: center;
`;

const Desc = styled.p`
  font-family: Lora, sans-serif;
  font-size: 0.8rem;
  width: 90%;
  text-align: center;
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

const HomeCardMobile = ({ img, heading, desc, button, refresh, buttonURL }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={img} layout="fill" objectFit="cover" alt="" />
      </ImageContainer>
      <Container>
        <Heading>{heading}</Heading>
        <Desc>{desc}</Desc>
        {button ? (
          <>
            {refresh ? (
              <Button>
                <a href={buttonURL}>{button}</a>
              </Button>
            ) : (
              <Link href={buttonURL}>
                <Button>{button}</Button>
              </Link>
            )}
          </>
        ) : null}
      </Container>
    </CardContainer>
  );
};

export default HomeCardMobile;
