import { Navigation } from "../components/navigation";
import { Sidebar } from "../components/sidebar";
import SmoothScroll from "smooth-scroll";
import { Outlet } from "react-router-dom";

import '../App.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Art = () => {

  return (
    <div>
      <Navigation />
      <div id="art">
        <div className="container">
          <div className="row">
            <Sidebar />
            <Outlet />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Art;
