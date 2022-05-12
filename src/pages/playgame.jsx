import { useState, useEffect } from "react";
import { ethers } from "ethers";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import SmoothScroll from "smooth-scroll";
import nftImg from "../assets/img/art/mistery.png";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 200,
    speedAsDuration: true,
});

const PlayGame = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    // const [selectedInPlayNFTs, setSelectedInPlayNFTs] = useState([]);
    // const [selectedUnAttachedNFTs, setSelectedUnAttachedNFTs] = useState([]);
    const [walletData, setWalletData] = useState({
        address: "",
        Balance: "",
    });

    function handleWindowSizeChange() {
        setIsMobile(window.innerWidth <= 768);
    }

    useEffect(() => {
        connectWallet();

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

                getNFTs(address);
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
    // const signer = provider.getSigner();
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

    const myArray = [];
    for (var i = 0; i < 9; i++) {
        myArray.push("Test");
    }

    const NftCardInPlay = (index) => {
        const [isSelected, setIsSelected] = useState(false);

        return (
            <Card className={isSelected ? "selected-nft" : ""} onClick={() => { setIsSelected(!isSelected) }}>
                <Card.Img variant="top" src={nftImg} style={{ width: '100%' }} />
                <Card.Body>
                    <Card.Title>DwarfSolder</Card.Title>
                    <Card.Text>
                        TokenID: N/A CityID: N/A
                    </Card.Text>
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <span className={isSelected ? "selected-icon" : ""}></span>
            </Card>
        );
    }

    const UnAttackedNftCard = (index) => {
        const [isSelected, setIsSelected] = useState(false);

        return (
            <Card className={isSelected ? "selected-nft" : ""} onClick={() => { setIsSelected(!isSelected) }}>
                <Card.Img variant="top" src={nftImg} style={{ width: '100%' }} />
                <Card.Body>
                    <Card.Title>TokenID: N/A</Card.Title>
                    {/* <Card.Text>
            TokenID: N/A CityID: N/A
          </Card.Text> */}
                    {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <span className={isSelected ? "selected-icon" : ""}></span>
            </Card>
        );
    }

    return (
        <div className="row play-game">
            <h3>{walletData.Balance}<span class="badge bg-dark">{isMobile ? walletData.address.toLocaleUpperCase().slice(0, 6) + "..." + walletData.address.toLocaleUpperCase().slice(walletData.address.length - 6, walletData.address.length) : walletData.address.toLocaleUpperCase()}</span></h3>
            <div className="col-md-6 col-sm-6">
                <Card>
                    <Card.Header as="h2">In Play NFTs</Card.Header>
                    <Card.Body>
                        <div className="row nft-cards">
                            {myArray.map((name, index) => (
                                <div key={index} className="col-md-4 col-sm-6">
                                    <NftCardInPlay />
                                </div>
                            ))}
                        </div>
                        <div className="d-flex justify-content-around">
                            <Button variant="dark">Claim</Button>
                            <Button variant="dark">Invest</Button>
                        </div>

                    </Card.Body>
                </Card>
            </div>
            <div className="col-md-6 col-sm-6">
                <Card>
                    <Card.Header as="h2">Free Merchants</Card.Header>
                    <Card.Body>
                        <div className="row nft-cards">
                            {myArray.map((name, index) => (
                                <div key={index} className="col-md-4 col-sm-6">
                                    <UnAttackedNftCard />
                                </div>
                            ))}
                        </div>

                        <Button variant="dark">Add Merchants to City</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default PlayGame;
