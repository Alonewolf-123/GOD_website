import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import Mint from './pages/mint';
import Whitepaper from './pages/whitepaper';
import Art from './pages/art';
import Artnewyorkclan from './pages/artnewyorkclan';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import Artmerchants from './pages/artmerchants';
import Arttokyoclan from './pages/arttokyoclan';
import Artlondonclan from './pages/artlondonclan';
import Artmedellineclan from './pages/artmedellneclan';
import Artmoscowclan from './pages/artmoscowclan';
import Artkingstonclan from './pages/artkingstonclan';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/art" element={<Art />}>
            <Route index element={<Artmerchants />} />
            <Route path='/art/merchant' element={<Artmerchants />} />
            <Route path='/art/newyorkclan' element={<Artnewyorkclan />} />
            <Route path='/art/tokyoclan' element={<Arttokyoclan />} />
            <Route path='/art/londonclan' element={<Artlondonclan />} />
            <Route path='/art/medellineclan' element={<Artmedellineclan />} />
            <Route path='/art/moscowclan' element={<Artmoscowclan />} />
            <Route path='/art/kingstonclan' element={<Artkingstonclan />} />
          </Route>
        </Routes>
      </Router>
    </React.Fragment >
  )
}

export default App;