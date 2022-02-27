import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import SmoothScroll from "smooth-scroll";
import dwarfSolderImg from "../assets/img/art/Kingston_Soldier.png";
import dwarfCaposImg from "../assets/img/art/Kingston_Capo.png";
import bossImg from "../assets/img/art/Kingston_Soldier.png";
import dwarfatherImg from "../assets/img/art/Kingston_Capo.png";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const Artkingstonclan = () => {

  return (
    <div className="col-md-8 col-sm-8">
      <div className="row">
        <div className="col-md-5 col-sm-6">
          <Card>
            <Card.Img variant="top" src={dwarfatherImg} style={{ width: '100%' }} />
            <Card.Body>
              <Card.Title>Dwarfather</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-5 col-sm-6">
          <Card>
            <Card.Img variant="top" src={bossImg} style={{ width: '100%' }} />
            <Card.Body>
              <Card.Title>Bosses</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-5 col-sm-6">
          <Card>
            <Card.Img variant="top" src={dwarfCaposImg} style={{ width: '100%' }} />
            <Card.Body>
              <Card.Title>DwarfCapos</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-5 col-sm-6">
          <Card>
            <Card.Img variant="top" src={dwarfSolderImg} style={{ width: '100%' }} />
            <Card.Body>
              <Card.Title>DwarfSoldier</Card.Title>
              {/* <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Artkingstonclan;
