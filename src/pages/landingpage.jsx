import { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { Summary } from "../components/summary";
import { Services } from "../components/services";
import { Team } from "../components/Team";
import { Footer } from "../components/footer";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
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
      }, 1000);

      setTimeout(function () {
        setIsFadOutEnd(true);
      }, 4000);
    }
  }, []);

  return (
    <div className={isFadOutEnd ? "" : "loading-landing-page"}>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Summary data={landingPageData.Summary} />
      <Services data={landingPageData.Services} />
      <Team data={landingPageData.Team} />
      <Footer data={landingPageData.Footer} />
      {!isFadOutEnd &&
        <div className={isLoading ? "loader-wrapper" : "loader-wrapper fadeOut"}>
          <img src="img/team/founder.webp" alt='...' className='loader-img' />
        </div>
      }
    </div>
  );
};

export default LandingPage;
