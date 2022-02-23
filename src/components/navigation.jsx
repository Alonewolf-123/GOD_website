import discordImg from "../assets/img/social/icons8-discord-24.png";
import twitterImg from "../assets/img/social/icons8-twitter-24.png";
import instaImg from "../assets/img/social/icons8-instagram-24.png";
import whitepaperLogoImg from "../assets/img/splash-black.png";

import { useState, useEffect } from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

export const Navigation = (props) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

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
        <Navbar collapseOnSelect expand="lg" bg="white" variant="white" id="menu">
            <Container>
                <Navbar.Brand href="/"><img src={whitepaperLogoImg} className='logo_img' alt="..."></img> {isMobile ? 'GOD': 'GAMEofDWARFS'}</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/mint">MINT</Nav.Link>
                        <Nav.Link href="/#services">ROADMAP</Nav.Link>
                        <Nav.Link href="/#team">TEAM</Nav.Link>
                        <Nav.Link href="/whitepaper">GAMERULES</Nav.Link>
                        <Nav.Link href="/art">ART</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#"><img src={discordImg} alt=""></img></Nav.Link>
                        <Nav.Link href="https://www.instagram.com/gameofdwarfs/"><img src={instaImg} alt=""></img></Nav.Link>
                        <Nav.Link href="https://twitter.com/GAMEofDWARFS"><img src={twitterImg} alt=""></img></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
