import { Navigation } from "../components/navigation";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const Play = () => {

  return (
    <div>
      <Navigation />
      <h1><p style={{marginTop: "300px", textAlign: "center"}}> Our custom player interface is coming soon!</p></h1>
    </div>
  );    
};

export default Play;
