import { Navigation } from "../components/navigation";
import { Gamerules } from "../components/gamerules";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const Whitepaper = () => {

  return (
    <div>
      <Navigation />
      <Gamerules />
    </div>
  );    
};

export default Whitepaper;
