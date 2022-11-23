import React, { useCallback, useEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import { MdClose } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(27, 27, 27, 0.541);
  display: flex;
  align-items: center;
  z-index: 999;
`;

const ImageWrap = styled.div`
  display: block;
  width: 40%;
  height: 90%;
  margin: 60px auto;
  border: 2px solid white;
  position: relative;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 52px;
  height: 53px;
  padding: 0;
  z-index: 999;
  color: white;
`;

const LeftArrow = styled(IoIosArrowBack)`
  display: flex;
  background-color: transparent;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  width: 70px;
  height: 70px;
  left: 150px;
  z-index: 999;
  color: white;
  cursor: pointer;
`;

const RightArrow = styled(IoIosArrowForward)`
  display: flex;
  background-color: transparent;
  justify-content: space-between;
  position: absolute;
  right: 150px;
  width: 70px;
  height: 70px;
  top: 50%;
  z-index: 999;
  color: white;
  cursor: pointer;
`;

const Lightbox = ({
  clickedImg,
  handleRotationRight,
  setClickedImg,
  handleRotationLeft,
}) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setClickedImg(null);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === "Escape" && clickedImg) {
        setClickedImg(null);
      }
    },
    [setClickedImg, clickedImg]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => {
      document.removeEventListener("keydown", keyPress);
    };
  }, [keyPress]);
  return (
    <>
      <Overlay ref={modalRef} onClick={closeModal}>
        <ImageWrap>
          <Image src={clickedImg} alt="" layout="fill" objectFit="cover" />
        </ImageWrap>

        <CloseModalButton
          aria-label="Close modal"
          onClick={() => setClickedImg((prev) => !prev)}
        />
        <LeftArrow onClick={handleRotationLeft} />

        <RightArrow onClick={handleRotationRight} />
      </Overlay>
    </>
  );
};

export default Lightbox;
