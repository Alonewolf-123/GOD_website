import { useState, useEffect } from "react";
import member_1 from '../assets/img/team/01.jpg'
import member_2 from '../assets/img/team/02.JPG'
import member_3 from '../assets/img/team/03.png'
import member_4 from '../assets/img/team/04.JPG'
import member_6 from '../assets/img/team/06.jpg'

// import member_1 from '../assets/img/team/01.png'
// import member_2 from '../assets/img/team/02.png'
// import member_3 from '../assets/img/team/03.png'
// import member_4 from '../assets/img/team/04.png'
// import member_6 from '../assets/img/team/06.png'
// import member_5 from '../assets/img/team/05.png'
// import member_7 from '../assets/img/team/07.png'
// import member_8 from '../assets/img/team/08.png'
import linkedin_icon from '../assets/img/social/Icon-Linkedin-In-circle.png'
import instagram_icon from '../assets/img/social/Icon-Instagram-In-circle.png'
import twitter_icon from '../assets/img/social/Icon-Twitter-In-circle.png'
import linkedin_icon_hovor from '../assets/img/social/Icon-Linkedin-In-circle-hovor.png'
import instagram_icon_hovor from '../assets/img/social/Icon-Instagram-In-circle-hovor.png'
import twitter_icon_hovor from '../assets/img/social/Icon-Twitter-In-circle-hovor.png'

export const Team = (props) => {

  const [isHover, setIsHover] = useState([false, false, false, false, false, false, false, false]);
  const [isTwitterHover, setIsTwitterHover] = useState([false, false, false, false, false, false, false, false]);
  const imgs = [member_1, member_4, member_6, member_2, member_3,];

  const onMouseEnterTwitter = (index) => {
    let isTwitterHover = [false, false, false, false, false, false, false, false];
    isTwitterHover[index] = true;
    setIsTwitterHover(isTwitterHover);
  };

  const onMouseLeaveTwitter = () => {
    let isTwitterHover = [false, false, false, false, false, false, false, false];
    setIsTwitterHover(isTwitterHover);
  };

  const onMouseEnter = (index) => {
    let isHover = [false, false, false, false, false, false, false, false];
    isHover[index] = true;
    setIsHover(isHover);
  };

  const onMouseLeave = () => {
    let isHover = [false, false, false, false, false, false, false, false];
    setIsHover(isHover);
  };

  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-12 section-title'>
          <h2>THE GOODFELLAS</h2>
        </div>

        <div className='row'>
          {props.data ? props.data.map((item, i) => (
            i === 2 ? <div key={`${item.name}-${i}`}>
              <div className='col-md-4 col-sm-4 team justify-items-center m-auto'>
                <div className='thumbnail'>
                  <img src={imgs[i]} alt='...' className='team-img' />
                  <a href={item.sns} onMouseEnter={() => onMouseEnter(i)} onMouseLeave={() => onMouseLeave()}>
                    <img src={isHover[i] ? (linkedin_icon_hovor) : (linkedin_icon)} alt='...' className='team-icon-img' />
                  </a>
                </div>
                <div className='caption'>
                  <h4>{item.name}</h4>
                  <p>{item.job}</p>
                  <p>{item.role}</p>
                </div>
              </div></div> : <div key={`${item.name}-${i}`} className='col-md-4 col-sm-6 team' style={{ marginLeft : i === 0 || i === 3 ? "15%" : "", marginRight : i === 1 || i === 4 ? "15%" : ""}}>
              <div className='thumbnail'>
                <img src={imgs[i]} alt='...' className='team-img' />
                <a href={item.sns} onMouseEnter={() => onMouseEnter(i)} onMouseLeave={() => onMouseLeave()}>
                  <img src={isHover[i] ? (i === 3 ? instagram_icon_hovor : linkedin_icon_hovor) : (i === 3 ? instagram_icon : linkedin_icon)} alt='...' className='team-icon-img' />
                </a>
                {
                  i === 1 && <a href={item.twitter} onMouseEnter={() => onMouseEnterTwitter(i)} onMouseLeave={() => onMouseLeaveTwitter()}>
                    <img src={isTwitterHover[i] ? (twitter_icon_hovor) : (twitter_icon)} alt='...' className='team-icon-img' style={{ marginLeft: "55px" }} />
                  </a>
                }
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
