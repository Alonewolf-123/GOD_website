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

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
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
                <div className='col-md-8 section-title m-auto'>
                    <h2><strong>THE GOODFELLAS</strong></h2>
                </div>
                <div className='row'>
                    {props.data ? (<>
                        <div className="col-md-8 col-sm-12 m-auto" style={{ display: isMobile ? "block" : "flex" }}>
                            <div className="col-md-6 col-sm-12 team">
                                <div className='thumbnail'>
                                    <img src={imgs[0]} alt='...' className='team-img' />
                                    <a href={props.data[0].sns} onMouseEnter={() => onMouseEnter(0)} onMouseLeave={() => onMouseLeave()}>
                                        <img src={isHover[0] ? (linkedin_icon_hovor) : (linkedin_icon)} alt='...' className='team-icon-img' />
                                    </a>
                                </div>
                                <div className='caption'>
                                    <h4>{props.data[0].name}</h4>
                                    <p>{props.data[0].job}</p>
                                    <p className="font-13">{props.data[0].role}</p>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-12 team">
                                <div className='thumbnail'>
                                    <img src={imgs[1]} alt='...' className='team-img' />
                                    <a href={props.data[1].sns} onMouseEnter={() => onMouseEnter(1)} onMouseLeave={() => onMouseLeave()}>
                                        <img src={isHover[1] ? (linkedin_icon_hovor) : (linkedin_icon)} alt='...' className='team-icon-img' />
                                    </a>
                                    <a href={props.data[1].twitter} onMouseEnter={() => onMouseEnterTwitter(1)} onMouseLeave={() => onMouseLeaveTwitter()}>
                                        <img src={isTwitterHover[1] ? (twitter_icon_hovor) : (twitter_icon)} alt='...' className='team-icon-img' style={{ marginLeft: "55px" }} />
                                    </a>
                                </div>
                                <div className='caption'>
                                    <h4>{props.data[1].name}</h4>
                                    <p>{props.data[1].job}</p>
                                    <p className="font-13">{props.data[1].role}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12 mt-4" style={{ display: isMobile ? "block" : "flex" }}>
                            <div className="col-md-4 col-sm-4 team">
                                <div className='thumbnail'>
                                    <img src={imgs[3]} alt='...' className='team-img' />
                                    <a href={props.data[3].sns} onMouseEnter={() => onMouseEnter(3)} onMouseLeave={() => onMouseLeave()}>
                                        <img src={isHover[3] ? (linkedin_icon_hovor) : (linkedin_icon)} alt='...' className='team-icon-img' />
                                    </a>
                                </div>
                                <div className='caption'>
                                    <h4>{props.data[3].name}</h4>
                                    <p>{props.data[3].job}</p>
                                    <p className="font-13">{props.data[3].role}</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 team">
                                <div className='thumbnail'>
                                    <img src={imgs[2]} alt='...' className='team-img' />
                                    <a href={props.data[2].sns} onMouseEnter={() => onMouseEnter(2)} onMouseLeave={() => onMouseLeave()}>
                                        <img src={isHover[2] ? (linkedin_icon_hovor) : (linkedin_icon)} alt='...' className='team-icon-img' />
                                    </a>
                                </div>
                                <div className='caption'>
                                    <h4>{props.data[2].name}</h4>
                                    <p>{props.data[2].job}</p>
                                    <p className="font-13">{props.data[2].role}</p>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 team">
                                <div className='thumbnail'>
                                    <img src={imgs[4]} alt='...' className='team-img' />
                                    <a href={props.data[4].sns} onMouseEnter={() => onMouseEnter(4)} onMouseLeave={() => onMouseLeave()}>
                                        <img src={isHover[4] ? (linkedin_icon_hovor) : (linkedin_icon)} alt='...' className='team-icon-img' />
                                    </a>
                                </div>
                                <div className='caption'>
                                    <h4>{props.data[4].name}</h4>
                                    <p>{props.data[4].job}</p>
                                    <p className="font-13">{props.data[4].role}</p>
                                </div>
                            </div>
                        </div>
                    </>
                    ) : 'loading'}
                </div>
            </div>
        </div>
    )
}
