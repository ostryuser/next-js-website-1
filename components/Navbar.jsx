import React from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: white;
    height: 30px;
    width: 30px;
    cursor: pointer;

    /* position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 50%); */
  }
`;

const Navbar = ({ toggle }) => {
  const router = useRouter();

  return (
    <header className={styles.navbar}>
      {/* <MenuBars onClick={toggle} /> */}
      <div className={styles.container}>
        <div className={styles.logoContainer}>M F K</div>
        <MenuBars onClick={toggle} />
        <nav className={styles.navContainer}>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <Link href="/">
                <a
                  className={
                    router.pathname == "/"
                      ? `${styles.active}`
                      : `${styles.listItemLink}`
                  }
                >
                  Home
                </a>
              </Link>
            </li>
            <li className={styles.listItem}>
              {/* <Link href="/services"> */}
              <a
                href="/services"
                className={
                  router.pathname == "/services"
                    ? `${styles.active}`
                    : `${styles.listItemLink}`
                }
              >
                Usługi
              </a>
              {/* </Link> */}
            </li>
            <li className={styles.listItem}>
              <Link href="/smartHome">
                <a
                  className={
                    router.pathname == "/smartHome"
                      ? `${styles.active}`
                      : `${styles.listItemLink}`
                  }
                >
                  Smart Dom
                </a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/gallery">
                <a
                  className={
                    router.pathname == "/gallery"
                      ? `${styles.active}`
                      : `${styles.listItemLink}`
                  }
                >
                  Galeria
                </a>
              </Link>
            </li>
            <li className={styles.listItem}>
              <Link href="/contact">
                <a
                  className={
                    router.pathname == "/contact"
                      ? `${styles.active}`
                      : `${styles.listItemLink}`
                  }
                >
                  Kontakt
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
