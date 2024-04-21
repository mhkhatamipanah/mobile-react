import React from 'react'
import "../Contact/card.scss"

function Card({img , socialmedia , className ,linkbtn}) {
  return (
<div className={className}>
    <div className='img-contact'> <img src={img} /> </div>
    <h2 className='title-cintact'>{socialmedia}</h2>
    <a className='btn btn-primary' href={linkbtn}>Link</a>
</div>
  )
}

export default Card