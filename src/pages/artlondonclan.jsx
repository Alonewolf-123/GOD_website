import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import SmoothScroll from "smooth-scroll";
import nftImg from "../assets/img/team/founder.webp";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Artlondonclan = () => {

  return (
    <div className="col-md-8 col-sm-8">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <Card>
            <Card.Img variant="top" src={nftImg} style={{ width: '100%' }} />
            <Card.Body>
              <Card.Title>Dwarfather</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-sm-6">
          <Card>
            <Card.Img variant="top" src={nftImg} style={{ width: '100%' }} />
            <Card.Body>
              <Card.Title>Bosses</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-sm-6">
          <Card>
            <Card.Img variant="top" src={nftImg} style={{ width: '100%' }} />
            <Card.Body>
              <Card.Title>DwarfCapos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6 col-sm-6">
          <Card>
            <Card.Img variant="top" src={nftImg} style={{ width: '100%' }} />
            <Card.Body>
              <Card.Title>DwarfSoldier</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Artlondonclan;
