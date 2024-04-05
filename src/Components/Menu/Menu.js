import React, { useEffect, useState } from 'react'

import './Menu.css'
import {Route,Routes,Link  } from 'react-router-dom'
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
export const Menu = () => {
const [show,setShow]=useState(null)
const [left,setLeft]=useState(-150)
useEffect(()=>{
    setShow(window.innerWidth>700?false:true)
},[show])
const Resize =()=>{
    if(window.innerWidth<700){
        setShow(true)
    }else(
        setShow(false)
    )
}
window.addEventListener("resize",Resize)

const fnBtnClick=()=>{
    setLeft(left===-150? 0 :-150 )
}
const handleItemClick=()=>{
    setLeft(-150)
}
  return (
    <div>
     { show &&  <button className='mobile-btn' onClick={fnBtnClick}>
            <span></span>
            <span></span>
            <span></span>
        </button>
}
 <ul style={{left}} className={show ? 'mobile-menu':"menu"}>

    <li><Link to="home" onClick={handleItemClick}>Home</Link></li>
    <li><Link to="about"  onClick={handleItemClick}>About</Link></li>
    <li><Link to="contact"  onClick={handleItemClick}>Contact</Link></li>
  </ul>
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
  
    </Routes> 
    </div>
  )
}


