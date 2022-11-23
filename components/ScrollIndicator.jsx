import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ScrollWrapper = styled.div`
  background-color: white;
  height: 2px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
`;

const ScrollStyle = styled.div`
  height: 100%;
  background-color: black;
`;

const ScrollIndicator = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ScrollWrapper>
      <ScrollStyle style={{ width: `${scrollTop}%` }}></ScrollStyle>
    </ScrollWrapper>
  );
};

export default ScrollIndicator;
