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
  const [cityCount, setCityCount] = useState(6);

  function getRemainGodAmountAndCityCount() {
    contract.remainingGodAmount().then(remainGod => {
      setRemainGod(ethers.utils.formatEther(remainGod));
    })

    contract.lastCityID().then(cityCount => {
      setCityCount(cityCount);
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

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    getRemainGodAmountAndCityCount();

    return () => {
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
