import { useState } from "react";
import discordImg from "../assets/img/social/icons8-discord-64.png";
import discordHoverImg from "../assets/img/social/icons8-discord-64-hover.png";
import image from "../assets/img/intro-bg.png";

export const Header = (props) => {
  const [isHover, setIsHover] = useState(false);
  
  return (
    <header id='header'>
      <div className='intro'>
        <img src={image} alt=""></img>
        <div className='col-md-8 col-md-offset-2 intro-text'>
          <a href='/mint' className='btn btn-custom btn-lg page-scroll' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>Join Discord<img src={isHover ? discordHoverImg : discordImg} alt=""></img></a>{' '}
        </div>
      </div>
    </header>
  )
}
