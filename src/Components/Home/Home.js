import React from 'react'
import "../Home/home.scss"
import logo from "../../images/3.png"



function Home() {
  return (
 
    <div className='home-page'>
      
      <div className='home-text'>
        <div>
          <img src={logo} />
          <h2 className='alo'>Welcome To My Website</h2>
          {/* <h4>Im Mohammad Hosein Khatami Panah</h4>
          <h4>Web developer and designer</h4> */}
        </div>
      </div>
      
    </div>
  
  )
}

export default Home