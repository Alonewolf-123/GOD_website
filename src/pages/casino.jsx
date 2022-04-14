import { useState, useEffect, useCallback } from "react";
import { Navigation } from "../components/navigation";
import SmoothScroll from "smooth-scroll";
import { Outlet } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const Casino = () => {
  const initialMinute = 0, initialSeconds = 10;
  const [isCasinoWait, setIsCasinoWait] = useState(false);
  const [minutes, setMinutes] = useState(initialMinute);
  const [seconds, setSeconds] = useState(initialSeconds);
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          setIsCasinoWait(false);
          clearInterval(myInterval)
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  });

  const onBetCasinoGame = () => {
    if (isCasinoWait) return;

    setMinutes(0);
    setSeconds(10);
    setIsCasinoWait(true);
  }

  return (
    <div>
      <Navigation />
      <div id="play">
        <div className="container">
          <div className="playgame_casino">
            <h1>{isCasinoWait ? "MAYBE NEXT TIME ..." : "BET $GOD, WIN AN NFT!"}</h1>
            <button className="game-casino-button" onClick={onBetCasinoGame}>{isCasinoWait ? "NEXT BET: " + minutes + ":" + (seconds < 10 ? "0" + seconds : seconds) : "BET 1000 $GOD"}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casino;
