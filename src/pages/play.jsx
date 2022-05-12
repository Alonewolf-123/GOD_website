import React, { useState } from "react";
import { Navigation } from "../components/navigation";
import SmoothScroll from "smooth-scroll";
// import { Outlet } from "react-router-dom";
import playgame_index_banner from "../assets/img/playgame/playgame_index_background.png";
import playgame_index_banner_mobile from "../assets/img/playgame/playgame_index_background_mobile.PNG";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const Play = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  return (
    <div>
      <Navigation />
      <div id="play">
        <div className="playgame_index">
          <img src={isMobile ? playgame_index_banner_mobile : playgame_index_banner } alt=""></img>
          <p className="connect-metamask" href="/play/dashboard"></p>
        </div>
      </div>
    </div>
  );    
};

export default Play;
