import { useState, useEffect, useCallback } from "react";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const PlayGame = () => {
  return (
    <div className="col-12">
      <h2><p style={{marginTop: "300px", textAlign: "center"}}>Our custom player interface is coming soon!</p></h2>
    </div>
  );
};

export default PlayGame;
