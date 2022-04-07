import discordImg from "../assets/img/social/icons8-discord-24.png";
import discordHoverImg from "../assets/img/social/icons8-discord-24-hover.png";
import twitterImg from "../assets/img/social/icons8-twitter-24.png";
import twitterHoverImg from "../assets/img/social/icons8-twitter-24-hover.png";
import instaImg from "../assets/img/social/icons8-instagram-24.png";
import etherscanImg from "../assets/img/social/etherscan-logo-circle.png";
import etherscanHoverImg from "../assets/img/social/etherscan-logo-circle-hover.png";

// import whitepaperLogoImg from "../assets/img/splash-black.png";

import { useState, useEffect } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";

export const Navigation = (props) => {
    const [isEtherscanHover, setIsEtherscanHover] = useState(false);
    const [isDiscordHover, setIsDiscordHover] = useState(false);
    const [isTwitterHover, setIsTwitterHover] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function socialIconMouseEnter(type) {
        if (type == "discord") {
            setIsDiscordHover(true);
        } else if (type == "twitter") {
            setIsTwitterHover(true);
        } else if (type == "etherscan") {
            setIsEtherscanHover(true);
        }
    }

    function socialIconMouseLeave(type) {
        if (type == "discord") {
            setIsDiscordHover(false);
        } else if (type == "twitter") {
            setIsTwitterHover(false);
        } else if (type == "etherscan") {
            setIsEtherscanHover(false);
        }
    }

    function handleWindowSizeChange() {
        setIsMobile(window.innerWidth <= 768);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white" id="menu" fixed="top">
                <Container>
                    <Navbar.Brand href="/home">{'GOD'}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="/mint">MINT</Nav.Link> */}
                            <Nav.Link href="/#roadmap">ROADMAP</Nav.Link>
                            <Nav.Link href="/#team">TEAM</Nav.Link>
                            <Nav.Link href="/whitepaper">GAMERULES</Nav.Link>
                            {/* <Nav.Link href="/art">ART</Nav.Link> */}
                            <Nav.Link href="/play">PLAY</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="https://twitter.com/GAMEofDWARFS"><img src={isTwitterHover ? twitterHoverImg : twitterImg} alt=""  onMouseEnter={() => {socialIconMouseEnter("twitter")}} onMouseLeave={() => {socialIconMouseLeave("twitter")}}></img></Nav.Link>
                            <Nav.Link href="" onClick={handleShow}><img src={isDiscordHover ? discordHoverImg : discordImg} alt=""  onMouseEnter={() => {socialIconMouseEnter("discord")}} onMouseLeave={() => {socialIconMouseLeave("discord")}}></img></Nav.Link>
                            {/* <Nav.Link href="https://www.instagram.com/gameofdwarfs/"><img src={instaImg} alt=""></img></Nav.Link> */}

                            {/* <Nav.Link href="https://etherscan.io/"><img src={etherscanImg} alt=""></img></Nav.Link> */}
                            <NavDropdown title={<img src={isEtherscanHover ? etherscanHoverImg : etherscanImg} alt="" onMouseEnter={() => {socialIconMouseEnter("etherscan");}} onMouseLeave={() => {socialIconMouseLeave("etherscan")}}></img>} id="contracts-dropdown">
                                <NavDropdown.Item href="https://rinkeby.etherscan.io/address/0xFA3a0a169c0fD067086E1f3eEEa6c8ebC2e11b69">Clan</NavDropdown.Item>
                                <NavDropdown.Item href="https://rinkeby.etherscan.io/address/0x25c475D80Bb8688Cbc9AB2d5720d4F92bBe63C5e">Dwarfs NFT</NavDropdown.Item>
                                <NavDropdown.Item href="https://rinkeby.etherscan.io/address/0xfb01bc8634E565Cd013ac0442b5B39Ed80BEB149">GOD</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Notification</Modal.Title>
                </Modal.Header>
                <Modal.Body>You’re too early… discord is coming soon!</Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    )
}
