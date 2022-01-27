import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import SmoothScroll from "smooth-scroll";
import nftImg from "../assets/img/team/01.webp"

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const NftCard = () => {
  return (
    <Card style={{ width: '100%', textAlign: 'center', marginBottom: '10px', border: '3px solid', padding: '20px', borderRadius: '10px' }}>
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

  const numIndexes = 10;
  return (
    <div className="col-md-8 col-sm-8">
      <div className="row">
        {myArray.map(name => (
          <div className="col-md-4 col-sm-6">
            <NftCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artmerchants;
