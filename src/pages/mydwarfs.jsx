import { Navigation } from "../components/navigation";
import SmoothScroll from "smooth-scroll";
import { Outlet } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import image1 from "../assets/img/art/Kingston/Kingston_Soldier.png";
import image2 from "../assets/img/art/Kingston/Kingston_Capo.png";
import image3 from "../assets/img/art/London/London_Soldier.png";
import image4 from "../assets/img/art/London/London_Capo.png";
import image5 from "../assets/img/art/Medellin/Medellin_Soldier.png";
import image6 from "../assets/img/art/Medellin/Medellin_Capo.png";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const MyDwarfs = () => {

  const myArray = [image1, image2, image3, image4, image5, image6];
  
  const NftCardInPlay = (props) => {
    const onViewClick = (id) => {
      window.location.href = "/play/dwarfsdetail/" + id;
    }
    return (
      <Card>
        <Card.Img variant="top" src={myArray[props.index]} style={{ width: '100%' }} />
        <Card.Body>
          <Card.Title>#2865 (STAKED)</Card.Title>
          {/* <Card.Text>
            TokenID: N/A CityID: N/A
          </Card.Text> */}
          <button className="game-dashboard-button" onClick={() => {onViewClick(props.index)}}>VIEW</button>
        </Card.Body>
      </Card>
    );
  }

  return (
    <div>
      <Navigation />
      <div id="play">
        <div className="container">
          <div className="my-dwarfs">
            <div className="nft-cards row">
              {myArray.map((name, index) => (
                <div key={index} className="col-md-4 col-sm-6">
                  <NftCardInPlay index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDwarfs;
