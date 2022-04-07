import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import SimpleImageSlider from "react-simple-image-slider";
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

import right_arrow_desktop from "../assets/img/gallery/right_arrow_desktop.png";
import left_arrow_desktop from "../assets/img/gallery/left_arrow_desktop.png";

import right_arrow_mobile from "../assets/img/gallery/right_arrow_mobile.png";
import left_arrow_mobile from "../assets/img/gallery/left_arrow_mobile.png";

export const Gallery = (props) => {
  const desktop_images = [kingston_desktop, Tokyo_desktop, Lodon_desktop, Medellin_desktop, NYC_desktop, Moscow_desktop];
  const mobile_images = [kingston_mobile, Tokyo_mobile, London_mobile, Medellin_mobile, NYC_mobile, Moscow_mobile];

  const [slideIndex, setSlideIndex] = useState(1)
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



  const nextSlide = () => {
    if (slideIndex !== images.length) {
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === images.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1) {
      setSlideIndex(images.length)
    }
  }

  const moveDot = index => {
    setSlideIndex(index)
  }

  const BtnSlider = ({ direction, moveSlide }) => {
    return (
      <button onClick={moveSlide} className={direction === "next" ? "btn-slide next" : "btn-slide prev"}>
        <img src={direction === "next" ? (isMobile ? right_arrow_mobile : right_arrow_desktop) : (isMobile ? left_arrow_mobile : left_arrow_desktop)} />
      </button>
    );
  }

  return (
    <div className="container-slider">
      {images.map((obj, index) => {
        return (
          <div key={index} className={slideIndex === index + 1 ? "slide active-anim" : "slide"}>
            <img src={images[index]} />
          </div>
        )
      })}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />

      <div className="container-dots">
        {Array.from({ length: images.length }).map((item, index) => (
          <div onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
        ))}
      </div>
    </div>
  )
}
