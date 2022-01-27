export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
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

        <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
          <ul className='nav navbar-nav navbar-right'>
            {/* <li>
              <a href='/#header' className='page-scroll'>
                Home
              </a>
            </li> */}
            <li>
              <a href='/mint' className='page-scroll'>
                Mint
              </a>
            </li>
            <li>
              <a href='/#summary' className='page-scroll'>
                Summary
              </a>
            </li>
            <li>
              <a href='/#services' className='page-scroll'>
                Roadmap
              </a>
            </li>
            <li>
              <a href='/whitepaper' className='page-scroll'>
                GameRules
              </a>
            </li>
            <li>
              <a href='/#team' className='page-scroll'>
                Team
              </a>
            </li>
            {/* <li>
              <a href='/#contact' className='page-scroll'>
                Contact
              </a>
            </li> */}
            
            
            <li>
              <a href='/art' className='page-scroll'>
                Art
              </a>
            </li>
            
            <li>
              <a href={props.data ? props.data.twitter : '/'}>
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li>
              <a href={props.data ? props.data.twitter : '/'}>
                <i className='fab fa-instagram'></i>
              </a>
            </li>
            <li>
              <a href={props.data ? props.data.facebook : '/'}>
                <i className='fab fa-discord'></i>
              </a>
            </li>
          </ul>
        </div>

      </div>
    </nav>
  )
}
