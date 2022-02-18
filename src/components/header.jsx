
import { useState, useEffect } from "react";
import bannerImg from "../assets/img/website_banner_animated.gif";
import bannerMobileImg from "../assets/img/banner_mobile.png";
import discordImg from "../assets/img/social/icons8-discord-64.png";
import discordHoverImg from "../assets/img/social/icons8-discord-64-hover.png";

export const Header = (props) => {
  const [isHover, setIsHover] = useState(false);
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
    <header id='header'>
      <div className='intro intro-text'>
        {/* <div className='overlay'>
          <div className='container'>
            <div className='col-md-8 col-md-offset-2 intro-text'> */}
              <img src={ isMobile ? bannerMobileImg : bannerImg} alt=""></img>
              <a href='/mint' className='btn btn-custom btn-lg page-scroll' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>Join Discord<img src={isHover || isMobile ? discordHoverImg : discordImg} alt=""></img></a>{' '}
            {/* </div>
          </div>
        </div> */}
      </div>
    </header>
  )
}
