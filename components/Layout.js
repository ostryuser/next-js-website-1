import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/head";
import ScrollIndicator from "./ScrollIndicator";
import Dropdown from "./Dropdown";
import CookieConsent from "./CookieConsent";
import { useState } from "react";

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Head>
        <title>MFK Serwis i Instalacje</title>

        <meta name="description" content="Serwis i instalacje elektryczne" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <CookieConsent />
      <ScrollIndicator />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
