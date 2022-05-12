import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
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
import { getNodeText } from "@testing-library/react";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const MyDwarfsDetail = () => {
  let contractAddress = "0x813e958A2e0C56ef1C09fDb444dAf4f204E47758"; // Clan contract address
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
  const [balance, setBalance] = useState(0);
  let { tokenId, cityId, level, generation } = useParams();
  
  const myArray = [image1, image2, image3, image4, image5, image6];
  const clanNameArray = ["N/A", "New York", "Tokyo", "Medellin", "London", "Moscow", "Kingston", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A", "N/A"];
  const rankArray = ["Dwarfather", "Dwarf Boss", "Dwarf Capos", "Dwarf Soldier"];

  // Button handler button for handling a
  // request event for metamask
  const connectWallet = () => {

    // Asking if metamask is already present or not
    if (window.ethereum) {

      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      window.location.href = "/play/connect";
      alert("install metamask extension!!");
    }
  };

  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
    contract.remainingGodAmount().then((balance) => {
      setBalance(parseFloat(ethers.utils.formatEther(balance)));
    })
  };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting a balance
    getbalance(account);
  };
  
  function disconnectWallet() {
    console.log("metamask is disconnected");
    window.location.href = "/play/connect";
  }

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= 768);
  }

  useEffect(() => {
    connectWallet();

    window.ethereum.on('disconnect', disconnectWallet);

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

    window.ethereum.on('chainChanged', (chainId) => {
      window.location.reload();
    });

    window.addEventListener('resize', handleWindowSizeChange);

    return () => {
      window.ethereum.removeListener('disconnect', disconnectWallet);
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
    <div>
      <Navigation />
      <div id="play">
        <div className="container">
          <div className="my-dwarfs-detail">
            <div className="row">
              <div className="col-md-6 col-sm-12 my-dwarfs-detail-img-section">
                <img src={myArray[tokenId % myArray.length]}></img>
              </div>
              <div className="col-md-6 col-sm-12 my-dwarfs-detail-text-section">
                <h3>{"#" + tokenId}</h3>
                <h1>{clanNameArray[cityId]}</h1>
                <h3>{level == 0 ? "Merchant" : "Mobster"}</h3>
                <h4>{"- Rank: " + (level === 0 ? "N/A" : rankArray[8 - level])}</h4>
                <h4>{"- GEN: " + generation}</h4>
                <h4>- Floor Price (OS): 0.8 ETH</h4>
                <div className="dwarfs-detail-label">
                  <h3>TOTAL BALANCE</h3>
                  <h2>{balance.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + " GOD"}</h2>
                </div>
                <button className="game-dashboard-button" style={{ width: "100%" }}>STAKE</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDwarfsDetail;
