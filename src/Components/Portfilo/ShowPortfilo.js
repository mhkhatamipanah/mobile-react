import React from 'react'
import Portfilo from './Cards/Portfilo'
import { BrowserRouter as Router, Route, Routes, Link , Outlet } from "react-router-dom";


function ShowPortfilo() {
    
  return (
    <div>
        <div>
            <Outlet/>
        </div>
    </div>
  )
}

export default ShowPortfilo