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
          <h4>IN A POST-APOCALYPTIC ALTERNATIVE UNIVERSE, HUMANITY WAS REDUCED TO DWARF SIZE.</h4>
        </div>
        <div className="col-md-7 div-center">
          <p>This unpredictable event completely altered life as we
            knew it. Governments have been overthrown, and political hierarchy abolished. Multiple clans fight for supremacy
            in the Metaverse. A crazy high prize of $GOD is at stake.
            Welcome to Game of Dwarfs (GOD).</p>
          <p>Game of Dwarfs is a play-to-earn passive income game
            designed on the Ethereum blockchain. It allows investors
            to generate $GOD, which can be exchanged on other platforms, used to acquire more NFTs, or to buy in-game upgrades.</p>
          <p>No non-sense roadmaps, no unrealistic promises. Just a
            game ready to play at launch. Fully on-chain, decentralized, completely autonomous. Made for the community,
            ruled by the players.</p>
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
