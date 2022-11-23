import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  background-color: black;
  font-family: Montserrat, sans-serif;
  max-width: 1600px;
  margin: auto;

  @media (max-width: 959px) {
    flex-direction: column;
  }
`;

const FooterItem = styled.div`
  padding: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;

const FooterLogo = styled.div`
  padding: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  color: white;
`;

const Blur = styled.h4`
  color: #a5a5a5;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: bold;
  filter: blur(0.5px);
  margin: 0 0;
`;

const Small = styled.h6`
  margin: 5px 0;
  color: #a5a5a5;
  text-transform: uppercase;
  letter-spacing: 3px;
  filter: blur(0.5px);
  margin-top: 15px;
  font-weight: 300;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterItem>
        <Blur>beauty of technology</Blur>
        <Small>copyright maccor 2020</Small>
      </FooterItem>
      <FooterLogo>
        <h1>M F K</h1>
      </FooterLogo>
      <FooterItem>
        <Blur>(0) 700 884 770</Blur>
        <Small>Czerwone Firany 69 Czerwona Ulica</Small>
      </FooterItem>
    </FooterContainer>
  );
};

export default Footer;
