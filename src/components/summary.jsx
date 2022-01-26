export const Summary = (props) => {
  return (
    <div id='summary' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Summary</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
              <div key={`${d.title}-${i}`} className='col-xs-6 col-md-3'>
                {' '}
                <i className={d.icon}></i>
                {/* <h3>{d.title}</h3> */}
                <p>{d.text}</p>
              </div>
            ))
            : 'Loading...'}
          <a href='/whitepaper' className='btn btn-custom btn-lg page-scroll'>FULL WHITEPAPER</a>{' '}
        </div>

      </div>
    </div>
  )
}
