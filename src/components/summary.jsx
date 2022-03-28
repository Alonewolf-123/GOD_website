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
          <h4><strong>Welcome to Game of Dwarfs, Frens!</strong></h4>
        </div>
        <div className="col-md-7 div-center">
          <p>You are now in an alternative universe in which humanity was reduced to dwarf size… Some of us are <span className="bolded">Merchants</span>, others are <span className="bolded">Mobsters</span>, but we all have one common goal: <span className="bolded">get more $GOD!</span></p>
          <p>Game of Dwarfs is a <span className="bolded">risk protocol P2E ecosystem</span> designed on the Ethereum blockchain. As a holder, you <span className="bolded">earn $GOD tokens as staking rewards.</span> The decisions you make impact the environment as a whole. Play it safe and earn your cut, or shoot for the moon and risk it all, the choice is yours.</p>
          <p>We don’t like empty promises and non-sense roadmaps. What you see is what you get. A dope-looking dwarf and a <span className="bolded">game ready to play at launch. Four smart contracts</span> interacting with each other are already in place (Etherscan link available soon). Fully on-chain, <span className="bolded">built by our community, ruled by our players.</span></p>
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
