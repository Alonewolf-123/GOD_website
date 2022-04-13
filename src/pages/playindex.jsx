import { useState, useEffect, useCallback } from "react";
import SmoothScroll from "smooth-scroll";
import gameplay_background from "../assets/img/playgame/playgame_index_background.png";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const PlayIndex = () => {
  return (
    <div className="playgame_index">
      
    </div>
  );
};

export default PlayIndex;
