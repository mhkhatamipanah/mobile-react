import React from 'react'
import "../circle/cardcircle.scss";


function Cardcircle({classOfContainer , program , percent ,classPercent}) {
  return (
    <div className={classOfContainer}>
    <div className={classPercent}>
      <svg>
        <circle cx="50" cy="50" r="40"/>
        <circle cx="50" cy="50" r="40" className="percent-progressbar"/>
      </svg>
      <div className="number">
        <h3>
          {percent}<span>%</span>
        </h3>
      </div>
    </div>
    <div className="title">
      <h2>{program}</h2>
    </div>
  </div>
  )
}

export default Cardcircle