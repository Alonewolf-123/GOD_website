import { useState, useEffect } from "react";
import { Navigation } from "../components/navigation";
import { Header } from "../components/header";
import { Summary } from "../components/summary";
import { About } from "../components/about";
import { Services } from "../components/services";
import { Gallery } from "../components/gallery";
import { Testimonials } from "../components/testimonials";
import { Team } from "../components/Team";
import { Contact } from "../components/contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Art = () => {

  return (
    <div>
      <Navigation />
      <p style={{marginTop: "300px", textAlign: "center"}}><h1>Art Page Coming Soon!</h1></p>
    </div>
  );    
};

export default Art;
