import { useState, useEffect } from "react";
import image_desktop from "../assets/img/gallery_1_desktop.png";
import image_mobile from "../assets/img/gallery_1_mobile.png";

export const Gallery = (props) => {
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
    <div id='portfolio'>
      <div className='service_img'>
        <img src={isMobile ? image_mobile : image_desktop} alt="" onLoad={props.onLoad}></img>
      </div>
    </div>
  )
}
