import { Navigation } from "../components/navigation";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Mint = () => {

  return (
    <div>
      <Navigation />
      <h1><p style={{marginTop: "300px", textAlign: "center"}}>Mint Page Coming Soon!</p></h1>
    </div>
  );    
};

export default Mint;
