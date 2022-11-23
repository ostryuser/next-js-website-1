import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import Lightbox from "../components/Lightbox";

const GridContainer = styled.section`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: minmax(300px, 300px);
  grid-auto-flow: dense;
  overflow: hidden;
  margin-bottom: 2em;
`;

const GridWrap = styled.div`
  overflow: hidden;
`;

const GridImage = styled.div`
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    transform: scale(1.2) rotate(10deg);
    cursor: pointer;
  }
`;

const gallery = ({ feed }) => {
  const images = feed.data;
  console.log(feed.data);

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.media_url);
  };

  const handleRotationRight = () => {
    const totalLength = images.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);

      const newUrl = images[0].media_url;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;

    const newUrl = images.filter((item) => {
      return images.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0].media_url;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = images.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);

      const newUrl = images[totalLength - 1].media_url;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;

    const newUrl = images.filter((item) => {
      return images.indexOf(item) === newIndex;
    });

    const newItem = newUrl[0].media_url;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  return (
    <GridContainer>
      {images &&
        images.map((image, index) => (
          <GridWrap key={image.id}>
            <GridImage>
              <Image
                src={image.media_url}
                alt={image.caption}
                layout="fill"
                onClick={() => handleClick(image, index)}
              />
            </GridImage>
          </GridWrap>
        ))}
      {clickedImg && (
        <Lightbox
          clickedImg={clickedImg}
          handleRotationRight={handleRotationRight}
          setClickedImg={setClickedImg}
          handleRotationLeft={handleRotationLeft}
        />
      )}
    </GridContainer>
  );
};

export const getStaticProps = async () => {
  const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,timestamp,media_type,permalink&access_token=${process.env.INSTAGRAM_KEY}`;
  const data = await fetch(url);
  const feed = await data.json();

  return {
    props: {
      feed,
    },
  };
};

export default gallery;
