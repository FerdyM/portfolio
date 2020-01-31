import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Main from './components/Main'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Route exact path="/" component={Main} />
        <Route exact path="/projects" component={Projects} />
      </BrowserRouter>
    </div>
  );
}

export default App;
