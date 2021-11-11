import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { data } from "../data";

const Container = styled.div`
  min-height: 100vh;
  padding: 100px 70px;
  @media only screen and (max-width: 576px) {
    padding: 60px 20px;
  }
`;
const Text = styled.h1`
  font-size: 50px;
  text-align: center;
  @media only screen and (max-width: 576px) {
    font-size: 30px;
    text-align: left;
  }
`;

const Title = styled.span`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 300%);
  z-index: 10;
  background: #e5383b;
  padding: 5px 10px;
  border: 2px solid white;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: 0.3s all ease;
  font-weight: 700;
  @media only screen and (max-width: 576px) {
    font-size: 13px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -250%);
  }
`;

const Image = styled.img`
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in;
`;

const DivProject = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 500px;
  height: 250px;
  position: relative;
  overflow: hidden;
  margin: 5px;
  border-radius: 5px;

  &:hover ${Title} {
    color: #e5383b;
    background: white;
    border: 2px solid #e5383b;
  }
  &:hover ${Image} {
    transform: scale(1.1);
  }
  @media only screen and (max-width: 576px) {
    min-width: 250px;
    height: 150px;
  }
`;

const DisplayProject = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
`;

const ButtonFill = styled.button`
  padding: 7px 15px;
  margin: 5px 3px;
  color: white;
  background: #e5383b;
  border: 2px solid white;
  cursor: pointer;
  transition: 0.3s all ease;
  font-weight: 600;
  &:hover {
    background: white;
    border: 2px solid #e5383b;
    color: #e5383b;
  }
`;

const Linka = styled.a`
  position: relative;
  width: 100%;
  height: 100%;
  color: white;
`;

export default function Project() {
  const [ImFound, setImFound] = useState([]);

  useEffect(() => {
    let filterMob = data.filter(e => e.title);
    setImFound(filterMob);
  }, []);
  const handleClick = e => {
    const mob = e.target.innerHTML;
    let filtered = data.filter(lo => lo.title.toLocaleLowerCase() === mob.toLocaleLowerCase());
    setImFound(filtered);
  };
  const handleClickAll = e => {
    let filterMob = data.filter(e => e.title);
    setImFound(filterMob);
  };

  return (
    <Container>
      <Text>My Project</Text>
      <ButtonFill onClick={handleClickAll}>All</ButtonFill>
      <ButtonFill onClick={handleClick}>HTML5</ButtonFill>
      <ButtonFill onClick={handleClick}>React</ButtonFill>

      <DisplayProject>
        {ImFound.map(projects => (
          <DivProject key={projects.id}>
            <Linka href={projects.url} target="_blank">
              <Title>{projects.title}</Title>
              <Image src={projects.img} />
            </Linka>
          </DivProject>
        ))}
      </DisplayProject>
    </Container>
  );
}
