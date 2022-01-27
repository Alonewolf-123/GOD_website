import phaseImg_1 from '../assets/img/roadmap/phase1.webp';
import phaseImg_2 from '../assets/img/roadmap/phase2.webp';
import phaseImg_3 from '../assets/img/roadmap/phase3.webp';

export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>ROADMAP TEASER</h2>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <img src={phaseImg_1}></img>
            <div className='service-desc'>
              <h3>PHASE 1:</h3>
              <h3>IN THE BEGINNING</h3>
              <p>A new dimension First drop Music to HAPE to</p>
            </div>
          </div>
          <div className='col-md-4'>
            <img src={phaseImg_2}></img>
            <div className='service-desc'>
              <h3>PHASE 2:</h3>
              <h3>IN THE BEGINNING</h3>
              <p>A new dimension First drop Music to HAPE to</p>
            </div>
          </div>
          <div className='col-md-4'>
            <img src={phaseImg_3}></img>
            <div className='service-desc'>
              <h3>PHASE 3:</h3>
              <h3>IN THE BEGINNING</h3>
              <p>A new dimension First drop Music to HAPE to</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
