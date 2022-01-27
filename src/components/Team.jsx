import founderImg from '../assets/img/team/founder.webp'
import member_1 from '../assets/img/team/01.webp'
import member_2 from '../assets/img/team/02.webp'
import member_3 from '../assets/img/team/03.webp'
import member_4 from '../assets/img/team/04.webp'
import member_5 from '../assets/img/team/05.webp'
import member_6 from '../assets/img/team/06.webp'

export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Team</h2>
        </div>

        <div id="row">
          <div className='col-md-12 col-sm-12 team'>
            <div className='thumbnail'>
              <img src={founderImg} alt='...' className='team-img' />
              <div className='caption'>
                <h4>DIGIMENTAL</h4>
                <p>PRIMAL HAPE</p>
                <p>Founder of HAPEBEAST, Digimental Studio and Lead Digital Artist on the project. Proud member of BAYC.</p>
              </div>
            </div>
          </div>
        </div>

        <div id='row'>
          <div className='col-md-2 col-sm-6 team'>
            <div className='thumbnail'>
              <img src={member_1} alt='...' className='team-img' />
              <div className='caption'>
                <h4>TROU</h4>
                <p>UTILITY</p>
                <p>A game designer and creative director with 20 years’ experience, Trou plans the future and scripts the present.</p>
              </div>
            </div>
          </div>
          <div className='col-md-2 col-sm-6 team'>
            <div className='thumbnail'>
              <img src={member_2} alt='...' className='team-img' />
              <div className='caption'>
                <h4>TROU</h4>
                <p>UTILITY</p>
                <p>A game designer and creative director with 20 years’ experience, Trou plans the future and scripts the present.</p>
              </div>
            </div>
          </div>
          <div className='col-md-2 col-sm-6 team'>
            <div className='thumbnail'>
              <img src={member_3} alt='...' className='team-img' />
              <div className='caption'>
                <h4>TROU</h4>
                <p>UTILITY</p>
                <p>A game designer and creative director with 20 years’ experience, Trou plans the future and scripts the present.</p>
              </div>
            </div>
          </div>
          <div className='col-md-2 col-sm-6 team'>
            <div className='thumbnail'>
              <img src={member_4} alt='...' className='team-img' />
              <div className='caption'>
                <h4>TROU</h4>
                <p>UTILITY</p>
                <p>A game designer and creative director with 20 years’ experience, Trou plans the future and scripts the present.</p>
              </div>
            </div>
          </div>
          <div className='col-md-2 col-sm-6 team'>
            <div className='thumbnail'>
              <img src={member_5} alt='...' className='team-img' />
              <div className='caption'>
                <h4>TROU</h4>
                <p>UTILITY</p>
                <p>A game designer and creative director with 20 years’ experience, Trou plans the future and scripts the present.</p>
              </div>
            </div>
          </div>
          <div className='col-md-2 col-sm-6 team'>
            <div className='thumbnail'>
              <img src={member_6} alt='...' className='team-img' />
              <div className='caption'>
                <h4>TROU</h4>
                <p>UTILITY</p>
                <p>A game designer and creative director with 20 years’ experience, Trou plans the future and scripts the present.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
