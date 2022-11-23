import React from "react";
import styled from "styled-components";
import { menuData } from "../data/DropdownData";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: white;
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  font-family: Montserrat, sans-serif;
  font-weight: bold;
  font-size: 1.5rem !important;
  text-transform: uppercase;
  letter-spacing: 2.5px;
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(FaTimes)`
  color: #000d1a;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 80px);
  text-align: center;
  margin-bottom: 4rem;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(4, 60px);
  }
`;

const DropdownLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  text-decoration: none;
  list-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: #333 !important;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 5px;

  max-width: 50%;
  margin: 2em auto;

  background-color: transparent;
  cursor: pointer;

  padding: 1.2em 2em;
  background: black;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  color: white;
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => (
            <>
              {item.refresh !== true ? (
                <DropdownLink href={item.link} key={index}>
                  {item.title}
                </DropdownLink>
              ) : (
                <a href={item.link} key={index}>
                  {item.title}
                </a>
              )}
            </>
          ))}
        </DropdownMenu>
        <BtnWrap>
          <Link href="/contact">
            <Button>Kontakt</Button>
          </Link>
        </BtnWrap>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
