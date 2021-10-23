import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Container = styled.div`
  width: 100%;
  padding: 0 50px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;

const TextMain = styled.h1`
  font-size: 70px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 70%, #e5383b 30%);
  line-height: 70px;
  position: relative;

  /* &::before {
    content: "Muhammad Fajri";
    position: absolute;
    right: 0;
    top: -5px;
    color: black;
    z-index: 0;
  } */
`;
const TextDev = styled.span`
  font-size: 20px;
  margin-bottom: 20px;
  font-family: "Titillium Web";
  font-weight: 700;
`;

const ContainerIcon = styled.div`
  display: flex;
`;

const LinkIcon = styled.a`
  height: 50px;
  width: 50px;
  padding: 10px;
  border-radius: 50%;
  background: #e5383b;
  cursor: pointer;
  margin: 0 7px;
  transition: 0.3s all ease;
  &:hover {
    background: ${props => props.color};
  }
  svg {
    font-size: 30px;
    object-fit: cover;
    fill: #e5e5e5;
  }
`;

const YourName = () => {
  return (
    <Container>
      <TextMain>I am Muhammad Fajri</TextMain>
      <TextDev>Front-End Developer</TextDev>
      <ContainerIcon>
        <LinkIcon target="_blank" href="" color="#0353a4">
          <FaLinkedin />
        </LinkIcon>
        <LinkIcon target="_blank" href="https://github.com/FajriSiiv" color="black">
          <FaGithub />
        </LinkIcon>
      </ContainerIcon>
    </Container>
  );
};

export default YourName;
