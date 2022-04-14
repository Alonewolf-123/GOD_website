import { Navigation } from "../components/navigation";
import SmoothScroll from "smooth-scroll";
import { Outlet } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const Discord = () => {

  return (
    <div>
      <Navigation />
      <div id="play">
        <div className="playgame_index">
          <p className="connect-metamask" href="/play/dashboard">You’re too early… Discord is coming soon!</p>
        </div>
      </div>
    </div>
  );    
};

export default Discord;
