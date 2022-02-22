import { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { Summary } from "../components/summary";
import { Kickass } from "../components/kickass";
import { Services } from "../components/services";
import { Gallery} from "../components/gallery";
import { Team } from "../components/team";
import { Footer } from "../components/footer";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import SplashImg from "../assets/img/splash.png";
import { ModerationTeam } from "../components/moderationteam";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const LandingPage = () => {
  const [landingPageData, setLandingPageData] = useState({});
  const [isLoading, setIsLoaindg] = useState(true);
  const [isFadOutEnd, setIsFadOutEnd] = useState(false);

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

  return (
    <div className={isFadOutEnd ? "" : "loading-landing-page"}>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Summary data={landingPageData.Summary} />
      <Kickass data={landingPageData.Kickass} />
      <Gallery />
      <Services data={landingPageData.Services} />
      <Team data={landingPageData.Team} />
      {/* <ModerationTeam data={landingPageData.Team} /> */}
      <Footer data={landingPageData.Footer} />
      {!isFadOutEnd &&
        <div className={isLoading ? "loader-wrapper" : "loader-wrapper fadeOut"}>
          <img src={SplashImg} alt='...' className='loader-img' />
        </div>
      }
    </div>
  );
};

export default LandingPage;
