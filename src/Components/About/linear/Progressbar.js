import React from 'react'
import "../linear/progressbar.scss"
function Progressbar({item , language , pic ,widthClass , percent}) {
  return (
    <div className={item}>
     <div>
      <div className='icon-and-language'>
        <img src={pic}/>
        <p>{language}</p>
      </div>
      <div >
        <p className='percent'>{percent}</p>
      </div>
    </div>
    <div className='bg-progressbar'>
    <div className={widthClass} role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>

    </div>
  </div>
  )
}

export default Progressbar
