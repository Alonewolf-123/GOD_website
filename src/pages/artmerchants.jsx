import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import SmoothScroll from "smooth-scroll";
import nftImg from "../assets/img/team/01.png"

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const NftCard = () => {
  return (
    <Card>
      <Card.Img variant="top" src={nftImg} style={{ width: '100%' }} />
      <Card.Body>
        <Card.Title>Merchant</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

const Artmerchants = () => {
  const myArray = [];
  for (var i = 0; i < 100; i++) {
    myArray.push("Test");
  }

  return (
    <div className="col-md-8 col-sm-8">
      <div className="row">
        {myArray.map((name, index) => (
          <div key={index} className="col-md-4 col-sm-6">
            <NftCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artmerchants;
