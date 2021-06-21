import React from "react";
import styled from "styled-components";
import smileyLogo from "../assets/images/smiley_logo.svg";

export default function Topbar() {
  return (
    <Container>
      <DecorativeCircle />
      <DateText>
        {new Date().toLocaleString("en-us", { day: "2-digit" })}
        <br />
        {new Date().toLocaleString("en-us", { month: "short" })}
      </DateText>

      <Logo src={smileyLogo} />
    </Container>
  );
}

const Container = styled.nav`
  width: 100vw;
  height: 25vh;
  font-family: var(--font-primary);
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const DecorativeCircle = styled.div`
  width: 100vw;
  height: 25vh;
  background-color: var(--accent-color);
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  clip-path: circle(65.2% at 23% 23%);
`;

const DateText = styled.h3`
  font-weight: 900;
  font-size: 6.6rem;
  text-align: center;
`;

const Logo = styled.img`
  width: 20vw;
`;
