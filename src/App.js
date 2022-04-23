import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';

import Container from "./components/Container";
import Main from "./pages/Main"

function App() {
  return (
    
      <Router basename={process.env.PUBLIC_URL}>
        <Container>
          <Route exact path="/" component={Main} />
        </Container>
      </Router>
  
  );
}

export default App;
