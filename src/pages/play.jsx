import { Navigation } from "../components/navigation";
import SmoothScroll from "smooth-scroll";
import { Outlet } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const Play = () => {

  return (
    <div>
      <Navigation />
      <div id="play">
        <div className="playgame_index">
          <p className="connect-metamask" href="/play/dashboard"></p>
        </div>
      </div>
    </div>
  );    
};

export default Play;
