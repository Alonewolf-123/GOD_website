import { useState, useEffect } from "react";
import image_desktop from "../assets/img/gallery_2_desktop.png";
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
                  <p>A drop of 8’000 NFTs. Players have a 15% chance of minting a
                    Mobster and an 85% chance of minting a Merchant, giving a
                    total of 1'200 mobsters and 6'800 merchants. Merchants start
                    the game with a balance of 100’000 $GOD. Mobsters earn
                    money by taxing merchants.</p>
                  <p>6 different clans are introduced in phase 1: New York, Tokyo,
                    Medellin, Kingston, London, Moscow. Players will earn $GOD
                    to acquire free NFTs during phase two. The earlier your are,
                    the richer you’ll become.</p>
                </div>
              </Event>
              <Event title={"PHASE 2: A NEW ARRIVAL"}>
                <div className="roadmap-content">
                  <p>Drops of 4000 NFTs every month for 3 months. 3 new clans will
                    be introduced every time, there will be a total of 15 clans in the
                    game.</p>
                  <p>In order to reward early investors: 50% of NFTs released in phase
                    2 can only be purchased in $GOD. The only way to own $GOD
                    at this point is if you have been able to buy NFTs from the first
                    drop. There is a limit of 1 NFT per player that can be minted in
                    $GOD.</p>
                  <p>All $GOD collected from NFT sales will be burnt. This will significantly increase the dollar value of $GOD and make all our
                    holders richer.</p>
                </div>
              </Event>
              <Event title={"PHASE 3: GOD WAR"}>
                <div className="roadmap-content">
                  <p>The peace treaty is broken and a clan war breaks out. All clans previously formed are now dissolved and each Merchant and Mobster must
                    choose which Dwarfather they will join to create new clans.</p>
                  <p>Clans with the most Merchants and Mobsters staked during the competition will earn more points. 1’800 000 000 $GOD coin is at stake during
                    GOD WAR and will be distributed between all clans proportionally to their ranking in the competition. GOD WAR ends when the consigliere announces it.</p>
                </div>
              </Event>
              <Event title={"PHASE 4: FULL GAME DEVELOPMENT"}>
                <div className="roadmap-content">
                  <p>The long-term vision for Game of Dwarfs is to create a self-sustaining global community build to last forever.</p>
                  <p>The game will be an NFT based on-chain version of monopoly. A digital economy in which every player will interact, build wealth, and create a new world together.</p>
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
