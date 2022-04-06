import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import BootstrapTable from 'react-bootstrap-table-next';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SmoothScroll from "smooth-scroll";
import { wallet } from "fontawesome";
import PlayGame from "./playgame";

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
  let contractAddress = "0xFA3a0a169c0fD067086E1f3eEEa6c8ebC2e11b69";
  let abi = [
    'function remainingGodAmount() public view returns (uint256)',
    'function lastCityID() public view returns (uint8)',
    'function getMobsterIdsOfCity(uint8 _cityId) external view returns (uint32[] memory)',
    'function getMerchantIdsOfCity(uint8 _cityId) external view returns (uint32[] memory)',
    'function getMerchantCountOfCity(uint8 _cityId) external view returns (uint32)'
  ];

  const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/f2b8d8d4253d4da99fdeb8124dc0e106");
  const signer = provider.getSigner();
  let contract = new ethers.Contract(contractAddress, abi, provider);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [remainGod, setRemainGod] = useState("0");
  const [desktopCityDetails, setDesktopCityDetails] = useState([]);
  const [mobileCityDetails, setMobileCityDetails] = useState([]);

  const cityNames = ["New York", "Tokyo", "London", "Medellin", "Moscow", "Kingston", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A"];

  function getRemainGodAmount() {
    contract.remainingGodAmount().then(res => {
      setRemainGod(ethers.utils.formatEther(res));
    })
  }

  function addCityDetail(cityId, mobsters, merchants, invested, _desktopCityDetails, _mobileCityDetails) {
    _desktopCityDetails.push({
      id: cityId,
      CityName: cityNames[cityId - 1],
      Mobsters: mobsters,
      Merchants: merchants,
      InvestAmount: invested
    });

    _mobileCityDetails.push({
      id: cityId,
      CityName: cityNames[cityId - 1],
      Members: "Mobsters: " + mobsters + "\n" + "Merchants: " + merchants,
      InvestAmount: invested
    });

    setMobileCityDetails(_mobileCityDetails);
    setDesktopCityDetails(_desktopCityDetails);
  }

  function getCityDetails() {
    let _desktopCityDetails = [];
    let _mobileCityDetails = [];
    contract.lastCityID().then(lastCity => {
      console.log(lastCity);
      for (let i = 1; i <= lastCity; i++) {
        contract.getMobsterIdsOfCity(i).then(mobsterIDs => {
          console.log(mobsterIDs);
          contract.getMerchantCountOfCity(i).then(merchantCount => {
            let investedGOD = 0;
            if (merchantCount > 0) {
              // calculate the invested GOD
              contract.getMerchantIdsOfCity(i).then(merchantIDs => {
                console.log(merchantIDs);
                // calculate the invested GOD

                addCityDetail(i, mobsterIDs.length, merchantCount, investedGOD, _desktopCityDetails, _mobileCityDetails);

              }).catch(err => {
                console.log(err);
              })
            } else {
              addCityDetail(i, mobsterIDs.length, merchantCount, 0, _desktopCityDetails, _mobileCityDetails);
            }
          })

        }).catch(err => {
          console.log(err);
        })
      }
    })
  }

  function startPlayGame() {
    if (window.ethereum) {
      window.location.href = "/play/game";
    } else {
      alert("install metamask extension!!");
    }
  }

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= 768);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    getRemainGodAmount();
    getCityDetails();

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

  return (
    <div className="row play-connect">
      <div className="col-md-6 col-sm-6">
        <Card>
          <Card.Header as="h2">Cities</Card.Header>
          <Card.Body>
            <BootstrapTable keyField='id' data={isMobile ? mobileCityDetails : desktopCityDetails} columns={isMobile ? columnsForMobile : columnsForDesktop} />
          </Card.Body>
        </Card>
      </div>
      <div className="col-md-6 col-sm-6">
        <Card>
          <Card.Header as="h2">Play</Card.Header>
          <Card.Body>
            <h3 style={{ marginTop: "100px" }}>Play to Earn: {remainGod} GOD</h3>
            <Button variant="dark" style={{ marginTop: "100px" }} onClick={startPlayGame}>Connect To Wallet</Button>
          </Card.Body>
        </Card>
      </div>
    </div>

  );
};

export default ConnectWallet;
