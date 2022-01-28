import discordImg from "../assets/img/social/icons8-discord-24.png";
import twitterImg from "../assets/img/social/icons8-twitter-24.png";
import instaImg from "../assets/img/social/icons8-instagram-24.png";

export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='/'>
            GOD
          </a>{' '}
        </div>

        <div className='collapse navbar-collapse' id='bs-navbar-collapse-1'>
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='/mint' className='page-scroll'>
                Mint
              </a>
            </li>
            {/* <li>
              <a href='/#summary' className='page-scroll'>
                Summary
              </a>
            </li> */}
            <li>
              <a href='/#services' className='page-scroll'>
                Roadmap
              </a>
            </li>
            <li>
              <a href='/#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='/whitepaper' className='page-scroll'>
                GameRules
              </a>
            </li>
            <li>
              <a href='/art' className='page-scroll'>
                Art
              </a>
            </li>
            <li>
              <a href={props.data ? props.data.twitter : '/'}>
                <img src={discordImg} alt=""></img>
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/gameofdwarfs/'>
                <img src={instaImg} alt=""></img>
              </a>
            </li>
            <li>
              <a href='https://twitter.com/GAMEofDWARFS'>
                <img src={twitterImg} alt=""></img>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
