import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import Mint from './pages/mint';
import Whitepaper from './pages/whitepaper';
import Art from './pages/art';
import './App.css';

const App = () => {

  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/art" element={<Art />} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App;