import { Navigation } from "../components/navigation";
import SmoothScroll from "smooth-scroll";
import { Outlet } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const GameConnect = () => {

  return (
    <div>
      <Navigation />
      <div id="play">
        <div className="playgame_index">
          <a className="connect-metamask" href="/play/dashboard">CONNECT METAMASK</a>
        </div>
      </div>
    </div>
  );    
};

export default GameConnect;
