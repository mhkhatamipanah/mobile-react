import React from 'react'
import Progressbar from './Progressbar'
import "../linear/linearProgressBar.scss"

import htmlPic from '../../../images/10.png'
import cssPic from '../../../images/11.png'
import jsPic from '../../../images/12.png'
import sassPic from '../../../images/13.png'
import bootstrapPic from '../../../images/14.png'
import reactPic from '../../../images/15.png'
import vuePic from '../../../images/16.png'
import gitPic from '../../../images/17.png'
import photoshopPic from '../../../images/18.png'

function LinearProgressBar() {
  return (
    <div className='grid-of-anility'>
    <Progressbar item="container-progressbar item-1" language="HTML" pic={htmlPic} widthClass="progress-bar  width-90" percent="90%"/>
    <Progressbar item="container-progressbar item-3" language="Bootstrap" pic={bootstrapPic} widthClass="progress-bar  width-80" percent="80%"/>
    <Progressbar item="container-progressbar item-2" language="CSS" pic={cssPic} widthClass="progress-bar  width-90" percent="90%"/>
    <Progressbar item="container-progressbar item-4" language="Sass" pic={sassPic} widthClass="progress-bar  width-80" percent="80%"/>
    <Progressbar item="container-progressbar item-5" language="JavaScript" pic={jsPic} widthClass="progress-bar  width-80" percent="80%"/>
    <Progressbar item="container-progressbar item-6" language="React.js" pic={reactPic} widthClass="progress-bar  width-80" percent="80%"/>
    <Progressbar item="container-progressbar item-8" language="git" pic={gitPic} widthClass="progress-bar  width-70" percent="70%"/>
    <Progressbar item="container-progressbar item-7" language="Vue.js" pic={vuePic} widthClass="progress-bar  width-60" percent="60%"/>
    <Progressbar item="container-progressbar item-9" language="Photoshop" pic={photoshopPic} widthClass="progress-bar  width-70" percent="70%"/>
    </div>
  )
}

export default LinearProgressBar