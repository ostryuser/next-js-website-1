import Layout from "../components/Layout";
import "../styles/globals.css";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { NotificationsProvider } from "@mantine/notifications";
import { MantineProvider } from "@mantine/core";

const GlobalStyles = createGlobalStyle`
html,
body {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}
`;

const rotation = keyframes`
/* from {transform: rotate(0deg);} */
to {transform: rotate(360deg);}
`;

const SpinnerWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
  z-index: 10;
`;

const Spinner = styled.div`
  /* position: absolute;
  left: 50%;
  top: 50%;
  height: 100px;
  width: 100px;
  margin: 0px auto;
  animation-name: ${rotation};
  animation-duration: 0.5s;
  animation-iteration-count: infinite;
  border-left: 6px solid rgba(0, 174, 239, 0.15);
  border-right: 6px solid rgba(0, 174, 239, 0.15);
  border-bottom: 6px solid rgba(0, 174, 239, 0.15);
  border-top: 6px solid rgba(0, 174, 239, 0.8);
  margin-top: -50px;
  margin-left: -90px; */
  &:before {
    content: "";
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    height: 60px;
    width: 60px;
    margin-top: -30px;
    margin-left: -30px;
    border-radius: 50%;
    border-top: 5px solid black;
    border-right: 5px solid transparent;

    animation-name: ${rotation};
    animation-duration: 0.7s;
    animation-iteration-count: infinite;
  }
`;

function Loading() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 100);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    loading && (
      <SpinnerWrapper>
        <Spinner />
      </SpinnerWrapper>
    )
  );
}
function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider>
      <NotificationsProvider>
        <Layout>
          <GlobalStyles />
          <>
            <Loading />
            <Component {...pageProps} />
          </>
        </Layout>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MyApp;
