import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import { Navigation } from "../components/navigation";
import SmoothScroll from "smooth-scroll";
import { Outlet } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const GameConnect = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [walletData, setWalletData] = useState({
    address: "",
    Balance: "",
  });
  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= 768);
  }

  useEffect(() => {
    // connectWallet();

    window.ethereum.on('disconnect', disconnectWallet);

    window.ethereum.on("accountsChanged", accounts => {
      if (accounts.length > 0) {
        console.log(`Account connected: ${accounts[0]}`);
        accountChangeHandler(accounts[0]);
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

  function disconnectWallet() {
    console.log("metamask is disconnected");
    window.location.href = "/play/connect";
  }

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

    // Requesting balance method
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"]
      })
      .then((balance) => {
        // Setting balance
        setWalletData({
          address: address,
          Balance: parseFloat(ethers.utils.formatEther(balance)).toFixed(3) + " ETH",
        });

        window.location.href="/play/dashboard";

        // getNFTs(address);
      });
  };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setWalletData({
      address: account,
    });

    // Setting a balance
    getbalance(account);
  };

  const connectMetaMaskClick = () => {
    connectWallet();
  }

  return (
    <div>
      <Navigation />
      <div id="play">
        <div className="playgame_index">
          <button className="connect-metamask" onClick={connectMetaMaskClick}>CONNECT METAMASK</button>
        </div>
      </div>
    </div>
  );    
};

export default GameConnect;
