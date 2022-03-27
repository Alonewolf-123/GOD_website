import { useState, useEffect } from "react";
import sideBannerVideo from "../assets/img/side_banner_video.mp4";
export const Summary = (props) => {
  const [isHover, setIsHover] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1550);

  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= 1550);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
    <div id='summary' className='text-center'>
      <div className='container'>
        <div className='col-md-6 div-center section-title'>
          <h4>Welcome to Game of Dwarfs, Frens!</h4>
        </div>
        <div className="col-md-7 div-center">
          <p>You are now in an alternative universe in which humanity was reduced to dwarf size… Some of us are Merchants, others are Mobsters, but we all have one common goal: get more $GOD!</p>
          <p>Game of Dwarfs is a risk protocol P2E ecosystem designed on the Ethereum blockchain. As a holder, you will earn $GOD tokens as staking rewards. The decisions you make will impact the environment as a whole. Play it safe and earn your cut, or shoot for the moon and risk it all, the choice is yours.</p>
          <p>We don’t like empty promises and non-sense roadmaps. What you see is what you get. A dope-looking dwarf and a game ready to play at launch. Four smart contracts interacting with each other are already in place (Etherscan link available soon). Fully on-chain, built by our community, ruled by our players.</p>
          <h3><a href="/whitepaper">FULL GAMERULES</a></h3>
        </div>
      </div>
      {/* <div className={isMobile ? "col-md-4 div-center" : "side_banner_video"}>
        <video autoPlay muted loop id="video">
          <source src={sideBannerVideo} type="video/mp4" />
        </video>
      </div> */}
    </div>
  )
}
