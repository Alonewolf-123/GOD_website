import { Navigation } from "../components/navigation";
import SmoothScroll from "smooth-scroll";
import { Outlet } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const GameDashboard = () => {

  const onMyDwarfsClick = () => {
    window.location.href = "/play/mydwarfs";
  }

  const onGodCasinoClick = () => {
    window.location.href = "/play/casino";
  }

  return (
    <div>
      <Navigation />
      <div id="play">
        <div className="playgame_dashboard">
          <div className="container">
            <div className="playgame-dashboard-content">
              <div className="row">
                <div className="col-md-6 col-sm-12" style={{textAlign: "center"}}>
                  <h1>game of dwarfs</h1>
                  <button onClick={onMyDwarfsClick} className="game-dashboard-button">my dwarfs</button>
                  <button onClick={onGodCasinoClick} className="game-dashboard-button">god casino</button>
                  <button className="game-dashboard-button">clan list (6)</button>
                </div>
                <div className="col-md-6 col-sm-12" style={{textAlign: "center"}}>
                  <h1>welcome back!</h1>
                  <div className="game-dashboard-label">
                    <h3>TOTAL BALANCE</h3>
                    <h2>562,580 $GOD</h2>
                  </div>
                  <div className="game-dashboard-label">
                    <h3>PHASE ONE</h3>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDashboard;
