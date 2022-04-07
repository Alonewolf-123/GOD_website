import { useState, useEffect } from "react";
import kingston_desktop from "../assets/img/gallery/Kingston_desktop.png";
import Tokyo_desktop from "../assets/img/gallery/Tokyo_desktop.png";
import Lodon_desktop from "../assets/img/gallery/London_desktop.png";
import Medellin_desktop from "../assets/img/gallery/Medellin_desktop.png";
import NYC_desktop from "../assets/img/gallery/NYC_desktop.png";
import Moscow_desktop from "../assets/img/gallery/Moscow_desktop.png";

import kingston_mobile from "../assets/img/gallery/Kingston_mobile.png";
import Tokyo_mobile from "../assets/img/gallery/Tokyo_mobile.png";
import London_mobile from "../assets/img/gallery/London_mobile.png";
import Medellin_mobile from "../assets/img/gallery/Medellin_mobile.png";
import NYC_mobile from "../assets/img/gallery/NYC_mobile.png";
import Moscow_mobile from "../assets/img/gallery/Moscow_mobile.png";

import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

export const Gallery = (props) => {
  const desktop_images = [kingston_desktop, Tokyo_desktop, Lodon_desktop, Medellin_desktop, NYC_desktop, Moscow_desktop];
  const mobile_images = [kingston_mobile, Tokyo_mobile, London_mobile, Medellin_mobile, NYC_mobile, Moscow_mobile];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [images, setImages] = useState(isMobile ? mobile_images : desktop_images);


  function handleWindowSizeChange() {
    setIsMobile(window.innerWidth <= 768);
    if (isMobile) {
      setImages(mobile_images);
    } else {
      setImages(desktop_images);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    }
  }, []);

  return (
    <div className="slide-container">
      <Slide transitionDuration={500} autoplay = {isMobile ? false : true}>
       {images.map((slideImage, index)=> (
          <div className="each-slide" key={index}>
            <img src={images[index]} style={{width: "100%"}} />
          </div>
        ))} 
      </Slide>
    </div>
  )
}
