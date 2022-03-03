import { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { Summary } from "../components/summary";
import { Kickass } from "../components/kickass";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Team } from "../components/team";
import { Footer } from "../components/footer";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import SplashImg from "../assets/img/splash-white.png";
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
  const [isGalleryLoaded, setIsGalleryLoaded] = useState(false);
  const [isServicesLoaded, setIsServicesLoaded] = useState(false);

  useEffect(() => {
    setLandingPageData(JsonData);

    if (window.location.href.includes("#")) {
      setIsLoaindg(false);
      setIsFadOutEnd(true);
    } else {
      setTimeout(function () {
        setIsLoaindg(false);
      }, 2000);

      setTimeout(function () {
        setIsFadOutEnd(true);
      }, 3000);
    }
  }, []);

  const headerLoaded = () => {
    console.log("header loaded");
    setIsHeaderLoaded(true);
  }

  const galleryLoaded = () => {
    console.log("galleryLoaded");
    setIsGalleryLoaded(true);
  }

  const servicesLoaded = () => {
    console.log("servicesLoaded");
    setIsServicesLoaded(true);
  }

  return (
    <div className={isFadOutEnd ? "" : "loading-landing-page"}>
      <Navigation />
      <Header data={landingPageData.Header} onLoad={headerLoaded} />
      <Summary data={landingPageData.Summary} />
      <Kickass data={landingPageData.Kickass} />
      <Gallery onLoad={galleryLoaded} />
      <Services data={landingPageData.Services} onLoad={servicesLoaded} />
      <Team data={landingPageData.Team} />
      {/* <ModerationTeam data={landingPageData.Team} /> */}
      <Footer data={landingPageData.Footer} />
      {(!isFadOutEnd || !isHeaderLoaded || !isGalleryLoaded || !isServicesLoaded) &&
        <div className={isLoading ? "loader-wrapper" : "loader-wrapper fadeOut"}>
          <img src={SplashImg} alt='...' className='loader-img' />
        </div>
      }
    </div>
  );
};

export default LandingPage;
