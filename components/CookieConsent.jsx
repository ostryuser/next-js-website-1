import styled from "styled-components";
import React, { useState, useEffect } from "react";

const Container = styled.div`
  width: 100%;
  position: relative;
  z-index: 999;
`;

const BottomBar = styled.div`
  font-family: Montserrat, sans-serif;
  max-width: 1300px;
  background-color: black;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 5px 2em;
`;

const Button = styled.button`
  text-transform: uppercase;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 5px;

  max-width: 50%;
  margin: 2em;

  background-color: transparent;
  cursor: pointer;

  padding: 1.2em 2em;
  background: white;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  color: black;
`;

function App() {
  let [firstVisit, setFirstVisit] = useState(true);
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    // localStorage.clear();

    // checking if localStorage has a "hasVisited" key
    if (localStorage.getItem("hasVisited")) {
      // setting the state of welcomeMessage to "Welcome back!" if it does
      setFirstVisit(false);
    } else {
      // creating the "hasVisited" key value pair in localStorage if it doesnt exist
      localStorage.setItem("hasVisited", "true");
    }
    // we are only running this useEffect on the first render of app because we passed an
    // empty array

    setInterval(() => {
      setIsDisplayed(true);
    }, 3000);
  }, []);

  const handleLocal = () => {
    setFirstVisit(false);
  };

  return (
    <>
      {isDisplayed ? (
        <Container>
          {firstVisit ? (
            <BottomBar>
              <h5>
                Ta strona korzysta z plików cookies. Dalsze korzystanie ze
                strony oznacza, że zgadzasz się na ich użycie.
              </h5>
              <Button onClick={handleLocal}>Zgoda</Button>
            </BottomBar>
          ) : null}
        </Container>
      ) : null}
    </>
  );
}

export default App;
