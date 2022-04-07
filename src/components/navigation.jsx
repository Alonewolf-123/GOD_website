import discordImg from "../assets/img/social/icons8-discord-24.png";
import twitterImg from "../assets/img/social/icons8-twitter-24.png";
import instaImg from "../assets/img/social/icons8-instagram-24.png";
import etherscanImg from "../assets/img/social/etherscan-logo-circle.png";

// import whitepaperLogoImg from "../assets/img/splash-black.png";

import { useState, useEffect } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from "react-bootstrap/Button";

export const Navigation = (props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                            <Nav.Link href="https://twitter.com/GAMEofDWARFS"><img src={twitterImg} alt=""></img></Nav.Link>
                            <Nav.Link href="" onClick={handleShow}><img src={discordImg} alt=""></img></Nav.Link>
                            {/* <Nav.Link href="https://www.instagram.com/gameofdwarfs/"><img src={instaImg} alt=""></img></Nav.Link> */}

                            {/* <Nav.Link href="https://etherscan.io/"><img src={etherscanImg} alt=""></img></Nav.Link> */}
                            <NavDropdown title={<img src={etherscanImg} alt=""></img>} id="contracts-dropdown">
                                <NavDropdown.Item href="https://etherscan.io/">Dwarfs NFT</NavDropdown.Item>
                                <NavDropdown.Item href="https://etherscan.io/">Clan</NavDropdown.Item>
                                <NavDropdown.Item href="https://etherscan.io/">GOD</NavDropdown.Item>
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
