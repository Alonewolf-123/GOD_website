import { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { Summary } from "../components/summary";
import { Kickass } from "../components/kickass";
import { Roadmap } from "../components/roadmap";
import { Gallery } from "../components/gallery";
import { Team } from "../components/team";
import { Footer } from "../components/footer";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import FirstSplashImg from "../assets/img/first_splash.gif";
import SecondSplashImg from "../assets/img/splash-white.png";
import { ModerationTeam } from "../components/moderationteam";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [isLoading, setIsLoaindg] = useState(true);
  const [isFadOutEnd, setIsFadOutEnd] = useState(false);
  const [isHeaderLoaded, setIsHeaderLoaded] = useState(false);
  const [isGalleryLoaded, setIsGalleryLoaded] = useState(true);
  const [isServicesLoaded, setIsServicesLoaded] = useState(true);
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setLandingPageData(JsonData);
    if (window.location.href.includes("#")) {
      setIsLoaindg(false);
      setIsFadOutEnd(true);
      setIsHeaderLoaded(true);
      setIsGalleryLoaded(true);
      setIsServicesLoaded(true);
    } else if (window.location.href.substring(window.location.href.length - 5, window.location.href.length) == "/home") {
      setIsHomePage(true);
    }
  }, []);

  const startFadOut = () => {
    setTimeout(function () {
      setIsLoaindg(false);
    }, 1000);

    setTimeout(function () {
      setIsFadOutEnd(true);
    }, 2000);
  }

  const headerLoaded = () => {
    console.log("header loaded");
    setIsHeaderLoaded(true);
    if (isGalleryLoaded && isServicesLoaded) {
      startFadOut();
    }
  }

  const galleryLoaded = () => {
    console.log("galleryLoaded");
    setIsGalleryLoaded(true);
    if (isHeaderLoaded && isServicesLoaded) {
      startFadOut();
    }
  }

  const servicesLoaded = () => {
    console.log("servicesLoaded");
    setIsServicesLoaded(true);
    if (isGalleryLoaded && isHeaderLoaded) {
      startFadOut();
    }
  }

  return (
    <div className={(isFadOutEnd && isHeaderLoaded && isGalleryLoaded && isServicesLoaded) ? "" : "loading-landing-page"}>
      <Navigation />
      <Header data={landingPageData.Header} onLoad={headerLoaded} />
      <Summary data={landingPageData.Summary} />
      <Gallery onLoad={galleryLoaded} />
      <Roadmap data={landingPageData.Services} onLoad={servicesLoaded} />
      <Kickass data={landingPageData.Kickass} />
      <Team data={landingPageData.Team} />
      {/* <ModerationTeam data={landingPageData.Team} /> */}
      <Footer data={landingPageData.Footer} />
      {(!isFadOutEnd || !isHeaderLoaded || !isGalleryLoaded || !isServicesLoaded) &&
        <div className={(isLoading || !isHeaderLoaded || !isGalleryLoaded || !isServicesLoaded) ? "loader-wrapper" : "loader-wrapper fadeOut"}>
          <img src={isHomePage? SecondSplashImg : FirstSplashImg} alt='...' className='loader-img' />
        </div>
      }
    </div>
  );
};

export default LandingPage;
