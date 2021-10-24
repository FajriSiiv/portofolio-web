import styled from "styled-components";
import { FaHtml5, FaCss3, FaJs, FaReact, FaBootstrap } from "react-icons/fa";
import breakpoints from "../breakpoints";

const Container = styled.div`
  height: 100vh;
  padding: 100px 100px 0px 100px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;

  @media only screen and ${breakpoints.device.xs} {
    padding: 60px 10px;
    overflow: hidden;
    display: flex;
    justify-content: center;
  }
`;

const Top = styled.div``;
const Text = styled.h1`
  font-size: 100px;
  @media only screen and ${breakpoints.device.xs} {
    font-size: 30px;
  }
`;
const TextMob = styled.h3`
  font-size: 30px;
  font-weight: 400;
  @media only screen and ${breakpoints.device.xs} {
    font-size: 20px;
    word-break: break-all;
  }
`;
const DisplaySkills = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 30px;
  flex-wrap: wrap;
`;
const DisplayIcon = styled.div`
  height: 100px;
  width: 100px;
  padding: 15px;
  border-radius: 50%;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  svg {
    font-size: 50px;
    fill: ${props => props.color};
  }
  @media only screen and ${breakpoints.device.xs} {
    height: 70px;
    width: 70px;
    padding: 8px;
    margin: 5px 7px;
    svg {
      font-size: 30px;
    }
  }
`;

const Highlight = styled.span`
  color: #e5383b;
  font-weight: 600;
`;

const About = () => {
  return (
    <Container>
      <Text>About.</Text>
      <Top>
        <TextMob>
          I am Muhammad Fajri,<Highlight>Front-end Developer</Highlight>.I describe myself as a
          passionate developer who loves coding, open source, and the web platform.
        </TextMob>
        <DisplaySkills>
          <DisplayIcon>
            <FaHtml5 color="#ef233c" />
          </DisplayIcon>

          <DisplayIcon>
            <FaCss3 color="#0077b6" />
          </DisplayIcon>

          <DisplayIcon>
            <FaJs color="#ffb703" />
          </DisplayIcon>

          <DisplayIcon>
            <FaBootstrap color="#8338ec" />
          </DisplayIcon>

          <DisplayIcon>
            <FaReact color="#0466c8" />
          </DisplayIcon>
        </DisplaySkills>
      </Top>
    </Container>
  );
};

export default About;
