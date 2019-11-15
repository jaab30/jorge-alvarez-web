import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import './App.css';

import Container from "./components/Container";
import Main from "./pages/Main"

function App() {
  return (
    <Router>
      <Container>
      <Route exact path="/" component={Main} />
      </Container>
    </Router>
  );
}

export default App;
