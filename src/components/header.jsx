
import discordImg from "../assets/img/social/icons8-discord-64.png";

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                {/* <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p> */}
                <a href='/mint' className='btn btn-custom btn-lg page-scroll'>Join Discord<img src={discordImg}></img></a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
