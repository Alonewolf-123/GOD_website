import { useState, useEffect, useCallback } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

export const desktopProductsGenerator = quantity => {
  const items = [];
  for (let i = 0; i < quantity; i++) {
    items.push({
      id: i,
      CityName: `City Name ${i}`,
      Mobsters: 200,
      Merchants: 2100 + i,
      InvestAmount: 2100 + i
    });
  }
  return items;
};

export const mobileProductsGenerator = quantity => {
  const items = [];
  for (let i = 0; i < quantity; i++) {
    items.push({
      id: i,
      CityName: `City Name ${i}`,
      Members: "Mobsters: 200\n" + "Merchants: " + (2100 + i).toString(),
      InvestAmount: 2100 + i
    });
  }
  return items;
};

const ConnectWallet = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= 768);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const columnsForDesktop = [{
    dataField: 'id',
    text: 'No',
    sort: true
  }, {
    dataField: 'CityName',
    text: 'City Name',
    sort: true
  }, {
    dataField: 'Mobsters',
    text: 'Mobsters',
    sort: true
  }, {
    dataField: 'Merchants',
    text: 'Merchants',
    sort: true
  }, {
    dataField: 'InvestAmount',
    text: 'Invest Amount',
    sort: true
  }];

  const columnsForMobile = [{
    dataField: 'id',
    text: 'No',
    sort: true
  }, {
    dataField: 'CityName',
    text: 'City Name',
    sort: true
  }, {
    dataField: 'Members',
    text: 'Mobsters\nMerchants',
    sort: true
  }, {
    dataField: 'InvestAmount',
    text: 'Invest Amount',
    sort: true
  }];

  const desktopProducts = desktopProductsGenerator(10);
  const mobileProducts = mobileProductsGenerator(10);
  return (
    <div className="row">
      <div className="col-md-6 col-sm-6">
        <Card>
          <Card.Header as="h2">Cities</Card.Header>
          <Card.Body>
            <BootstrapTable keyField='id' data={isMobile? mobileProducts : desktopProducts} columns={isMobile ? columnsForMobile : columnsForDesktop} />
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-6 col-sm-6">
        <Card>
          <Card.Header as="h2">Play</Card.Header>
          <Card.Body>
            <h3 style={{marginTop: "100px"}}>Play to Earn: 300,000,000 GOD</h3>
            <Button variant="dark" style={{marginTop: "100px"}}>Connect To Wallet</Button>
          </Card.Body>
        </Card>
      </div>
    </div>

  );
};

export default ConnectWallet;
