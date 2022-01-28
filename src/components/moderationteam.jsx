import founderImg from '../assets/img/team/founder.webp'

export const ModerationTeam = (props) => {
  return (
    <div id='moderationteam' className='text-center'>
      <div className='container'>
        <div id="row">
          <div className='col-md-12 col-sm-12 team'>
            <div className='thumbnail'>
              <img src={founderImg} alt='...' className='team-img' />
              <div className='caption'>
                <h2>THE MODERATION TEAM</h2>
              </div>
            </div>
          </div>
        </div>

        <div id='row'>
          <div className='col-md-2 col-sm-6 team'>
            <div className='thumbnail'>
              <div className='caption'>
                <h4>NG</h4>
                <p>HEAD MOD & CHINESE MODERATOR</p>
              </div>
            </div>
          </div>
          <div className='col-md-2 col-sm-6 team'>
            <div className='thumbnail'>
              <div className='caption'>
                <h4>RIDOO</h4>
                <p>INDONESIAN MODERATOR</p>
              </div>
            </div>
          </div>
          <div className='col-md-2 col-sm-6 team'>
            <div className='thumbnail'>
              <div className='caption'>
                <h4>TOBI</h4>
                <p>PHILIPPINES MODERATOR</p>
              </div>
            </div>
          </div>
          <div className='col-md-2 col-sm-6 team'>
            <div className='thumbnail'>
              <div className='caption'>
                <h4>HOTMESSMELLOW</h4>
                <p>INDIAN MODERATOR</p>
              </div>
            </div>
          </div>
          <div className='col-md-2 col-sm-6 team'>
            <div className='thumbnail'>
              <div className='caption'>
                <h4>THEGOAT</h4>
                <p>NEW ZEALAND MODERATOR</p>
              </div>
            </div>
          </div>
          <div className='col-md-2 col-sm-6 team'>
            <div className='thumbnail'>
              <div className='caption'>
                <h4>YIN</h4>
                <p>CHINESE MODERATOR</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
