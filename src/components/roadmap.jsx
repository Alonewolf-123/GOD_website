import { useState, useEffect } from "react";
import image_desktop from "../assets/img/gallery_2_desktop.jpg";
import image_mobile from "../assets/img/gallery_2_mobile.png";
import { Timeline, Event } from "react-timeline-scribble";

export const Roadmap = (props) => {
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
    <div id='roadmap' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2><strong>ROADMAP</strong></h2>
        </div>
        <div className='row'>
          <div className='col-md-8 div-center'>
            <Timeline>
              <Event title={"PHASE 1: THE ORIGINAL GANGSTERS"}>
                <div className="roadmap-content">
                  <ul>
                    <li><p><span className="bolded">Community building</span> through <span className="bolded">partnership</span> with talented artists and <span className="bolded">collaborations</span> with other quality projects and alpha groups</p></li>
                    <li><p><span className="bolded">First collection drops.</span> You have a 15% chance of minting a Mobster and an 85% chance of minting a Merchant</p></li>
                    <li><p>Merchants start the game with a balance of 100’000 $GOD. Mobsters earn money by taxing merchants</p></li>
                    <li><p><span className="bolded">6</span> different <span className="bolded">clans</span> are introduced in phase 1: <span className="bolded">New York, Tokyo, Medellin, Kingston, London, Moscow</span></p></li>
                    <li><p>Accumulate $GOD token to obtain NFTs of the following drops, grow your army of dwarfs and gain power in the game</p></li>
                    <li><p><span className="bolded">The Casino</span>: risk some of your daily earnings for a chance to win an NFT which will be <span className="bolded">automatically airdropped to your wallet</span></p></li>
                  </ul>
                </div>
              </Event>
              <Event title={"PHASE 2: NEW CLANS IN TOWN"}>
                <div className="roadmap-content">
                  <ul>
                    <li><p><span className="bolded">Together</span> we are building a digital land of <span className="bolded">opportunities</span>, a community where <span className="bolded">risk & strategic thinking</span> are rewarded</p></li>
                    <li><p><span className="bolded">New NFT drops</span>: we are planning to release a limited number of new NFTs in 3 drops, each time <span className="bolded">in collaboration with a talented artist</span></p></li>
                    <li><p><span className="bolded">Community reward</span>: To reward our OG’s we created a system where <span className="bolded">50% of the following drops are sold exclusively in $GOD.</span> There is a limit of <span className="bolded">1 NFT per player</span> that can be minted in $GOD</p></li>
                    <li><p><span className="bolded">Community growth</span>: To further grow our community, we offer the opportunity to new players to join the game by buying the <span className="bolded">other half of the next drops in ETH</span></p></li>
                    <li><p>Tokenomics mechanics: In an effort to restrict supply and maintain an inflationary trend on our currency, <span className="bolded">all $GOD collected from NFT sales will be burnt</span></p></li>
                    <li><p><span className="bolded">Casino</span>: During phase 2, the casino is still in place, <span className="bolded">500 NFTs of each of the following drops</span> will be available as <span className="bolded">gambling rewards</span></p></li>
                  </ul>
                </div>
              </Event>
              <Event title={"PHASE 3: GOD WAR"}>
                <div className="roadmap-content">
                  <ul>
                    <li><p>The peace treaty is broken, and a <span className="bolded">clan war breaks out</span></p></li>
                    <li><p>All clans previously formed are now dissolved and each Merchant and Mobster must <span className="bolded">choose which Dwarfather</span> they will join to <span className="bolded">create new clans</span></p></li>
                    <li><p>Clans with the most <span className="bolded">Merchants</span> and <span className="bolded">Mobsters staked</span> during the competition will earn more points</p></li>
                    <li><p>1’800 000 000 $GOD coin is at stake during GOD WAR and will be distributed between all clans proportionally to their ranking in the competition</p></li>
                    <li><p>GOD WAR ends when the consigliere announces it</p></li>
                  </ul>
                </div>
              </Event>
              <Event title={"PHASE 4: FULL GAME DEVELOPMENT"}>
                <div className="roadmap-content">
                  <p>The long-term vision for Game of Dwarfs is to create <span className="bolded">a self-sustaining</span> global <span className="bolded">community built to last forever</span>.</p>
                  <p>The game will be an NFT based on-chain version of monopoly. A <span className="bolded">digital economy</span> in which every player will <span className="bolded">interact, build wealth,</span> and create <span className="bolded">new opportunities</span> together.</p>
                </div>
              </Event>
            </Timeline>
          </div>
        </div>
      </div>
      <img src={isMobile ? image_mobile : image_desktop} alt="" onLoad={props.onLoad}></img>
    </div>
  )
}
