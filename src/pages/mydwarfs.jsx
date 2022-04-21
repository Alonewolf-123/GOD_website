import { useState, useEffect, useCallback } from "react";
import { Navigation } from "../components/navigation";
import SmoothScroll from "smooth-scroll";
import { Outlet } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ethers } from "ethers";

import image1 from "../assets/img/art/Kingston/Kingston_Soldier_large.png";
import image2 from "../assets/img/art/Kingston/Kingston_Capo_large.png";
import image3 from "../assets/img/art/London/London_Soldier_large.png";
import image4 from "../assets/img/art/London/London_Capo_large.png";
import image5 from "../assets/img/art/Medellin/Medellin_Soldier_large.png";
import image6 from "../assets/img/art/Medellin/Medellin_Capo_large.png";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const MyDwarfs = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [walletData, setWalletData] = useState({
    address: "",
    balance: "",
  });
  const [nftList, setNftList] = useState([]);
  const [isShowNftList, setIsShowNftList] = useState(false);

  let contractAddress = "0xfEDCE5e27423090714eDB4744c60991A923f2754"; // Dwarfs NFT contract address
  let abi = [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "tokenOfOwnerByIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getTokenTraits",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint32",
              "name": "index",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "cityId",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "level",
              "type": "uint32"
            },
            {
              "internalType": "uint32",
              "name": "generation",
              "type": "uint32"
            }
          ],
          "internalType": "struct ITraits.DwarfTrait",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
  ];

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

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setWalletData({
      address: account,
      balance: ""
    });

    getNFTs(account);
  };


  const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/f2b8d8d4253d4da99fdeb8124dc0e106");
  const signer = provider.getSigner();
  let contract = new ethers.Contract(contractAddress, abi, provider);

  const getNFTs = (address) => {
    let m_NftList = [];
    contract.balanceOf(address).then(tokens => {
      for (let i = 0; i < tokens.toNumber(); i++) {
        contract.tokenOfOwnerByIndex(address, i).then(tokenId => {
          contract.getTokenTraits(tokenId).then(trait => {
            console.log(trait);
            contract.tokenURI(tokenId).then(uri => {
              console.log(uri);
              m_NftList.push({
                tokenId: tokenId.toNumber(),
                uri: uri,
                index: trait.index,
                cityId: trait.cityId,
                level: trait.level,
                generation: trait.generation
              });

              if (m_NftList.length >= tokens.toNumber()) {
                m_NftList.sort((a, b) => {
                  return a.tokenId - b.tokenId;
                });
                setNftList(m_NftList);
                setIsShowNftList(true);
              }
            })
          })
        })
      }
    })
  }

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= 768);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);

    connectWallet();

    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  const myArray = [image1, image2, image3, image4, image5, image6];

  const NftCardInPlay = (props) => {
    const onViewClick = (nft) => {
      window.location.href = "/play/dwarfsdetail/" + nft.tokenId + "/" + nft.cityId + "/" + nft.level + "/" + nft.generation;
    }
    console.log(props.nft.tokenId + " " + props.nft.cityId);
    return (
      <Card>
        <Card.Img variant="top" src={myArray[props.nft.tokenId % myArray.length]} style={{ width: '100%' }} />
        <Card.Body>
          <Card.Title>{"#" + props.nft.tokenId + (props.nft.cityId == 0 ? " (UNSTAKED)" : " (STAKED)")}</Card.Title>
          {/* <Card.Text>
            TokenID: N/A CityID: N/A
          </Card.Text> */}
          <button className="game-dashboard-button" onClick={() => { onViewClick(props.nft) }}>VIEW</button>
        </Card.Body>
      </Card>
    );
  }

  return (
    <div>
      <Navigation />
      <div id="play">
        <div className="container">
          <div className="my-dwarfs">
            <div className="nft-cards row">
              {isShowNftList ?
                nftList.map((element, index) => (
                  <div key={index} className="col-md-6 col-sm-6">
                    <NftCardInPlay nft={element} />
                  </div>
                ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDwarfs;
