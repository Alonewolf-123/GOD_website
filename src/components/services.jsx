import phaseImg_1 from '../assets/img/roadmap/phase1.png';
import phaseImg_2 from '../assets/img/roadmap/phase2.png';
import phaseImg_3 from '../assets/img/roadmap/phase3.png';

export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>ROADMAP TEASER</h2>
        </div>
        <div className='row'>
          <div className='col-md-4'>
            <img src={phaseImg_1} alt=""></img>
            <div className='service-desc'>
              <h3>PHASE 1:</h3>
              <h3>IN THE BEGINNING</h3>
              <p>A new dimension First drop Music to HAPE to</p>
            </div>
          </div>
          <div className='col-md-4'>
            <img src={phaseImg_2} alt=""></img>
            <div className='service-desc'>
              <h3>PHASE 2:</h3>
              <h3>THE HAPE MACHINE</h3>
              <p>Second drops. Special collections. Simian engineering</p>
            </div>
          </div>
          <div className='col-md-4'>
            <img src={phaseImg_3} alt=""></img>
            <div className='service-desc'>
              <h3>PHASE 3:</h3>
              <h3>THE HAPEWALK</h3>
              <p>Clothing collabs. HAPE Counture. The runway to fame</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
