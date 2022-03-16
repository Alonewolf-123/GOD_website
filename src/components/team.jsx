import member_1 from '../assets/img/team/01.png'
import member_2 from '../assets/img/team/02.png'
import member_3 from '../assets/img/team/03.png'
import member_4 from '../assets/img/team/04.png'
import member_5 from '../assets/img/team/05.png'
import member_6 from '../assets/img/team/06.png'
import member_7 from '../assets/img/team/07.png'
import member_8 from '../assets/img/team/08.png'
import linkedin_icon from '../assets/img/social/Icon-Linkedin-In-circle.png'
import twitter_icon from '../assets/img/social/Icon-Twitter-In-circle.png'

export const Team = (props) => {
  const imgs = [member_1, member_2, member_3, member_4, member_5, member_6, member_7, member_8];
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-12 section-title'>
          <h2>THE GOODFELLAS</h2>
        </div>

        <div className='row'>
          {props.data
            ? props.data.map((item, i) => (
              <div key={`${item.name}-${i}`} className='col-md-3 col-sm-6 team'>
                <div className='thumbnail'>
                  <img src={imgs[i]} alt='...' className='team-img' />
                  <img src={i == 1 ? twitter_icon : linkedin_icon} alt='...' className='team-icon-img' />
                </div>
                <div className='caption'>
                  <h4>{item.name}</h4>
                  <p>{item.job}</p>
                  <p>{item.role}</p>
                </div>
              </div>
            ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
