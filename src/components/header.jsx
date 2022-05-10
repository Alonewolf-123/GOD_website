
import { useState, useEffect } from "react";
// import bannerImg from "../assets/img/website_main_image-01.png";
// import bannerVideoDesktop from "../assets/img/banner_video_desktop.mp4";
// import bannerVideoMobile from "../assets/img/banner_video_mobile.mp4";
import bannerMobileImg from "../assets/img/website_banner_mobile.png";
import bannerDesktopImg from "../assets/img/website_banner_desktop.png";
import bannerPlayButton from "../assets/img/website_banner_playbutton.PNG";
// import bannerText from "../assets/img/banner_text.gif";
// import discordImg from "../assets/img/social/icons8-discord-64.png";
// import discordHoverImg from "../assets/img/social/icons8-discord-64-hover.png";

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
        {/* <img src={ bannerText } alt="" className="banner_text_img"></img>     */}
        <img src={ isMobile ? bannerMobileImg : bannerDesktopImg} alt="" onLoad={props.onLoad}></img>
        {/* {isMobile ? <img src={bannerMobileImg} alt="" onLoad={props.onLoad}></img>
          : <video autoPlay muted loop id="video" onLoadedData={props.onLoad}>
            <source src={bannerVideoDesktop} type="video/mp4" />
          </video>} */}
        {/* <a href='/mint' className='btn btn-custom btn-lg page-scroll' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>Join Discord<img src={isHover || isMobile ? discordHoverImg : discordImg} alt=""></img></a>{' '} */}
        <a href='/play' className='btn btn-custom btn-lg page-scroll'>
          <img src={bannerPlayButton} alt=""/>
        </a>
        {/* </div>
          </div>
        </div> */}
      </div>
    </header>
  )
}
