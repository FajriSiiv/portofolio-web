import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 70px;
  background: #0d1321;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 99;

  @media only screen and (max-width: 576px) {
    height: 60px;
    width: fit-content;
  }
`;

const Center = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  @media only screen and (max-width: 576px) {
    width: 100vw;
    padding: 5px 10px;
    justify-content: center;
  }
`;

const Linked = styled.span`
  color: white;
  font-size: 20px;
  text-transform: uppercase;
  transition: 0.3s all ease;
  &:hover {
    color: #a4161a;
  }
  @media only screen and (max-width: 576px) {
    font-size: 14px;
    margin: 0 10px;
  }
`;

export default function Navbar() {
  return (
    <Container>
      <Center>
        <Link to="/">
          <Linked>Home.</Linked>
        </Link>
        <Link to="/project">
          <Linked>Project.</Linked>
        </Link>
        <Link to="/about">
          <Linked>About.</Linked>
        </Link>
      </Center>
    </Container>
  );
}
