import React from 'react';
import SmoothScroll from "smooth-scroll";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingpage';
import Mint from './pages/mint';
import Play from './pages/play';
import GameDashboard from './pages/gamedashboard';
import ConnectWallet from './pages/connectwallet';

import Whitepaper from './pages/whitepaper';
import Art from './pages/art';
import Artnewyorkclan from './pages/artnewyorkclan';
import 'jquery/src/jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'
import './App.css';
import Artmerchants from './pages/artmerchants';
import Arttokyoclan from './pages/arttokyoclan';
import Artlondonclan from './pages/artlondonclan';
import Artmedellineclan from './pages/artmedellneclan';
import Artmoscowclan from './pages/artmoscowclan';
import Artkingstonclan from './pages/artkingstonclan';
import PlayGame from './pages/playgame';
import PlayIndex from './pages/playindex';

const $ = require('jquery');
window.$ = $;
window.jQuery = $;

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<LandingPage />} />
          <Route path="/mint" element={<Mint />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route path="/art" element={<Art />}>
            <Route index element={<Artnewyorkclan />} />
            <Route path='/art/newyorkclan' element={<Artnewyorkclan />} />
            <Route path='/art/tokyoclan' element={<Arttokyoclan />} />
            <Route path='/art/londonclan' element={<Artlondonclan />} />
            <Route path='/art/medellineclan' element={<Artmedellineclan />} />
            <Route path='/art/moscowclan' element={<Artmoscowclan />} />
            <Route path='/art/kingstonclan' element={<Artkingstonclan />} />
            <Route path='/art/merchant' element={<Artmerchants />} />
          </Route>
          <Route path="/play" element={<Play />} />
          <Route path="/play/dashboard" element={<GameDashboard />} />
          {/* <Route path="/play" element={<Play />} >
            <Route index element={<PlayIndex />} />
            <Route path='/play/connect' element={<ConnectWallet />} />
            <Route path='/play/game' element={<PlayGame />} />
          </Route> */}
        </Routes>
      </Router>
    </React.Fragment >
  )
}

export default App;