import { useState, useEffect, useCallback } from "react";
import { Navigation } from "../components/navigation";
import SmoothScroll from "smooth-scroll";
import { Outlet } from "react-router-dom";
import { ethers } from "ethers";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const GameDashboard = () => {
  let contractAddress = "0x813e958A2e0C56ef1C09fDb444dAf4f204E47758"; // Clan contract address
  let abi = [
    'function remainingGodAmount() public view returns (uint256)',
    'function lastCityID() public view returns (uint8)',
    'function getMobsterIdsOfCity(uint8 _cityId) external view returns (uint32[] memory)',
    'function getMerchantIdsOfCity(uint8 _cityId) external view returns (uint32[] memory)',
    'function getMerchantCountOfCity(uint8 _cityId) external view returns (uint32)',
    {
      "inputs": [],
      "name": "contractInfo",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "totalNumberOfTokens",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "MAX_MERCHANT_COUNT",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "DAILY_GOD_RATE",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "TAX_PERCENT",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "bMerchantGamePlaying",
          "type": "uint32"
        },
        {
          "internalType": "uint32",
          "name": "lastCityID",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
  ];

  const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/f2b8d8d4253d4da99fdeb8124dc0e106");
  const signer = provider.getSigner();
  let contract = new ethers.Contract(contractAddress, abi, provider);

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [remainGod, setRemainGod] = useState("0");
  const [cityCount, setCityCount] = useState("N/A");

  function getRemainGodAmountAndCityCount() {
    contract.remainingGodAmount().then(remainGod => {
      setRemainGod(ethers.utils.formatEther(remainGod));
    })

    contract.contractInfo().then(contractInfo => {
      setCityCount(contractInfo.lastCityID);
    })
  }

  const onMyDwarfsClick = () => {
    window.location.href = "/play/mydwarfs";
  }

  const onGodCasinoClick = () => {
    window.location.href = "/play/casino";
  }

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= 768);
  }

  function disconnectWallet() {
    console.log("metamask is disconnected");
    window.location.href = "/play/connect";
  }

  useEffect(() => {
    window.ethereum.on('disconnect', disconnectWallet);
    window.addEventListener('resize', handleWindowSizeChange);

    window.ethereum.on("accountsChanged", accounts => {
      if (accounts.length > 0) {
        // console.log(`Account connected: ${accounts[0]}`);
        // accountChangeHandler(accounts[0]);
      }
      else {
        window.location.href = "/play/connect";
        console.log("Account disconnected");
      }
    });

    getRemainGodAmountAndCityCount();

    return () => {
      window.ethereum.removeListener('disconnect', disconnectWallet);
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
    <div>
      <Navigation />
      <div id="play">
        <div className="playgame_dashboard">
          <div className="container">
            <div className="playgame-dashboard-content">
              <div className="row">
                <div className="col-md-6 col-sm-12" style={{ textAlign: "center" }}>
                  <h1>game of dwarfs</h1>
                  <button onClick={onMyDwarfsClick} className="game-dashboard-button">my dwarfs</button>
                  <button onClick={onGodCasinoClick} className="game-dashboard-button">god casino</button>
                  <button className="game-dashboard-button">{"clan list (" + cityCount + ")"}</button>
                </div>
                <div className="col-md-6 col-sm-12" style={{ textAlign: "center" }}>
                  <h1>welcome back!</h1>
                  <div className="game-dashboard-label">
                    <h3>TOTAL BALANCE</h3>
                    <h2>{remainGod + " $GOD"}</h2>
                  </div>
                  <div className="game-dashboard-label">
                    <h3>PHASE ONE</h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDashboard;
