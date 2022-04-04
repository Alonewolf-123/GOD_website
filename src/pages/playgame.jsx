import { useState, useEffect, useCallback } from "react";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const PlayGame = () => {
  return (
    <div className="col-md-8 col-sm-8">
      <p>Play Game Page</p>
    </div>
  );
};

export default PlayGame;
