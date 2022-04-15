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

  let contractAddress = "0x25c475D80Bb8688Cbc9AB2d5720d4F92bBe63C5e";
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
          "internalType": "uint32",
          "name": "tokenId",
          "type": "uint32"
        }
      ],
      "name": "getTokenTraits",
      "outputs": [
        {
          "components": [
            {
              "internalType": "bool",
              "name": "isMerchant",
              "type": "bool"
            },
            {
              "internalType": "uint32",
              "name": "index",
              "type": "uint32"
            },
            {
              "internalType": "uint8",
              "name": "cityId",
              "type": "uint8"
            },
            {
              "internalType": "uint8",
              "name": "level",
              "type": "uint8"
            },
            {
              "internalType": "uint8",
              "name": "generation",
              "type": "uint8"
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

  const provider = new ethers.providers.JsonRpcProvider("https://rinkeby.infura.io/v3/f2b8d8d4253d4da99fdeb8124dc0e106");
  const signer = provider.getSigner();
  let contract = new ethers.Contract(contractAddress, abi, provider);

  function getNFTs(address) {
    console.log(address);
    contract.balanceOf(address).then(tokens => {
      console.log(tokens);
      for (let i = 0; i < tokens; i++) {
        contract.tokenOfOwnerByIndex(address, i).then(tokenId => {
          contract.getTokenTraits(tokenId).then(trait => {
            contract.tokenURI(tokenId).then(uri => {

            })
          })
        })
      }
    })
  }


  const myArray = [image1, image2, image3, image4, image5, image6];
  
  const NftCardInPlay = (props) => {
    const onViewClick = (id) => {
      window.location.href = "/play/dwarfsdetail/" + id;
    }
    return (
      <Card>
        <Card.Img variant="top" src={myArray[props.index]} style={{ width: '100%' }} />
        <Card.Body>
          <Card.Title>#2865 (STAKED)</Card.Title>
          {/* <Card.Text>
            TokenID: N/A CityID: N/A
          </Card.Text> */}
          <button className="game-dashboard-button" onClick={() => {onViewClick(props.index)}}>VIEW</button>
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
              {myArray.map((name, index) => (
                <div key={index} className="col-md-6 col-sm-6">
                  <NftCardInPlay index={index} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDwarfs;
