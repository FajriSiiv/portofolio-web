import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { data } from "../data";

const Container = styled.div`
  height: 120vh;
  padding: 100px 70px;
`;
const Text = styled.h1`
  font-size: 50px;
  text-align: center;
`;

const DisplayProject = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;
const DivProject = styled.div`
  flex: 1;
  min-width: 300px;
  height: 250px;
  position: relative;
  overflow: hidden;
  margin: 5px;
`;

const Title = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background: black;
  padding: 5px 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;
const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const ButtonFill = styled.button``;

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
      <ButtonFill onClick={handleClick}>Shop</ButtonFill>
      <ButtonFill onClick={handleClick}>Landing Page</ButtonFill>

      <DisplayProject>
        {ImFound.map(projects => (
          <DivProject key={projects.id}>
            <Title>{projects.title}</Title>
            <Image src={projects.img} />
          </DivProject>
        ))}
        {/* {data.map(projects => (
          <DivProject key={projects.id}>
            <Title>{projects.title}</Title>
            <Image src={projects.img} />
          </DivProject>
        ))} */}
      </DisplayProject>
    </Container>
  );

  function newFunction(e) {
    console.log(e.target.innerHTML);
  }
}
