import { Navigation } from "../components/navigation";
import SmoothScroll from "smooth-scroll";
import { Outlet, useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import image1 from "../assets/img/art/Kingston/Kingston_Soldier_large.png";
import image2 from "../assets/img/art/Kingston/Kingston_Capo_large.png";
import image3 from "../assets/img/art/London/London_Soldier_large.png";
import image4 from "../assets/img/art/London/London_Capo_large.png";
import image5 from "../assets/img/art/Medellin/Medellin_Soldier_large.png";
import image6 from "../assets/img/art/Medellin/Medellin_Capo_large.png";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const MyDwarfsDetail = () => {
  let {id} = useParams();
  console.log(id);
  const myArray = [image1, image2, image3, image4, image5, image6];
  
  return (
    <div>
      <Navigation />
      <div id="play">
        <div className="container">
          <div className="my-dwarfs-detail">
            <div className="row">
              <div className="col-md-6 col-sm-12 my-dwarfs-detail-img-section">
                <img src={myArray[id]}></img>
              </div>
              <div className="col-md-6 col-sm-12 my-dwarfs-detail-text-section">
                <h3>#2865</h3>
                <h1>TOKYO CLAN</h1>
                <h3>- Merchant</h3>
                <h4>- Rank: N/A</h4>
                <h4>- GEN: 0</h4>
                <h4>- Floor Price (OS): 0.8 ETH</h4>
                <div className="dwarfs-detail-label">
                    <h3>TOTAL BALANCE</h3>
                    <h2>562,580 $GOD</h2>
                  </div>
                  <button className="game-dashboard-button" style={{width: "100%"}}>STAKE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDwarfsDetail;
