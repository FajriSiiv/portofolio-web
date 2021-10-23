import Navbar from "./components/Navbar";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import YourName from "./components/YourName";
import About from "./components/About";
import Project from "./components/Project";

const Container = styled.div`
  max-width: 1440px;
  position: relative;
  margin: auto;
  background: #0d1321;
  color: white;
`;

function App() {
  return (
    <Router>
      <Container>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <YourName />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/project">
            <Project />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
