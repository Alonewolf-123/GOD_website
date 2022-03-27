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
          <h2>ROADMAP</h2>
        </div>
        <div className='row'>
          <div className='col-md-8 div-center'>
            <Timeline>
              <Event title={"PHASE 1: THE ORIGINAL GANGSTERS"}>
                <div className="roadmap-content">
                  <p>Community building through partnership with talented artists and collaborations with other quality projects and alpha groups.</p>
                  <p>First collection drops. You have a 15% chance of minting a Mobster and an 85% chance of minting a Merchant.</p>
                  <p>Merchants start the game with a balance of 100’000 $GOD. Mobsters earn money by taxing merchants.</p>
                  <p>6 different clans are introduced in phase 1: New York, Tokyo, Medellin, Kingston, London, Moscow.</p>
                  <p>Accumulate $GOD token to obtain NFTs of the following drops, grow your army of dwarfs and gain power in the game.</p>
                  <p>The Casino: risk some of your daily earnings for a chance to win an NFT which will be automatically airdropped to your wallet.</p>
                </div>
              </Event>
              <Event title={"PHASE 2: NEW CLANS IN TOWN"}>
                <div className="roadmap-content">
                  <p>Together we are building a digital land of opportunities, a community where risk & strategic thinking is rewarded.</p>
                  <p>New NFT drops: we are planning to release a limited amount of new NFTs in 3 drops, each time in collaboration with a different artist.</p>
                  <p>Community reward: To reward our OG’s we created a system where 50% of the following drops are sold exclusively in $GOD. There is a limit of 1 NFT per player that can be minted in $GOD.</p>
                  <p>Community growth: In order to further grow our community we offer the opportunity to new players to join the game by the other half of the next drops in ETH.</p>
                  <p>Tokenomics mechanics: In an effort to restrict supply and maintain an inflationary trend on our currency, all $GOD collected from NFT sales will be burnt.</p>
                  <p> Casino: During phase 2, the casino is still in place, 500 NFTs of each of the following drops will be available as gambling rewards.</p>
                </div>
              </Event>
              <Event title={"PHASE 3: GOD WAR"}>
                <div className="roadmap-content">
                  <p>The peace treaty is broken and  a clan war breaks out.</p>
                  <p>All clans previously formed are now dissolved and each Merchant and Mobster must choose which Dwarfather they will join to create new clans.</p>
                  <p>Clans with the most Merchants and Mobsters staked during the competition will earn more points.</p>
                  <p>1’800 000 000 $GOD coin is at stake during GOD WAR and will be distributed between all clans proportionally to their ranking in the competition.</p>
                  <p>GOD WAR ends when the consigliere announces it.</p>
                </div>
              </Event>
              <Event title={"PHASE 4: FULL GAME DEVELOPMENT"}>
                <div className="roadmap-content">
                  <p>The long-term vision for Game of Dwarfs is to create a self-sustaining global community built to last forever.</p>
                  <p>The game will be an NFT based on-chain version of monopoly. A digital economy in which every player will interact, build wealth, and create new opportunities together.</p>
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
