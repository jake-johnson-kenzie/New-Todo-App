import React from "react";
import styled from "styled-components";
import smileyLogo from "../assets/images/smiley_logo.svg";

export default function Topbar() {
  const day = new Date().toLocaleString("en-us", { day: "2-digit" });
  const month = new Date()
    .toLocaleString("en-us", { month: "short" })
    .toUpperCase();
  return (
    <Container>
      <DecorativeCircle />
      <DateText>
        {day}
        <br />
        {month}
      </DateText>

      <Logo src={smileyLogo} />
    </Container>
  );
}

const Container = styled.nav`
  width: 100vw;
  height: 35vh;
  font-family: var(--font-primary);
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const DecorativeCircle = styled.div`
  width: 100vw;
  height: 50vh;
  background-color: var(--accent-color);
  position: absolute;
  top: -12vh;
  left: -15vw;
  border-radius: 0 100vh 100vh 100vh;
`;

const DateText = styled.h3`
  font-weight: 900;
  font-size: 6.6rem;
  text-align: center;
  z-index: 1;
`;

const Logo = styled.img`
  width: 30vw;
  z-index: 1;
`;
