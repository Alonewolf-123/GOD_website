export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Team</h2>
        </div>

        <div id="row">
          <div key="founder" className='col-md-12 col-sm-12 team'>
            <div className='thumbnail'>
              <img src="img/team/founder.webp" alt='...' className='team-img' />
              <div className='caption'>
                <h4>DIGIMENTAL</h4>
                <p>PRIMAL HAPE</p>
                <p>Founder of HAPEBEAST, Digimental Studio and Lead Digital Artist on the project. Proud member of BAYC.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-2 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                      <p>{d.role}</p>
                    </div>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
