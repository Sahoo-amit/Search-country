import React, { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Header.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isNav, setIsNav] = useState(false)
  const toggleNav=()=>{
    setIsNav(!isNav)
  }
  return (
    <div className='container'>
      <nav>
        <div className="left-nav">
          <h1><Link to='/'>WorldAtlas</Link></h1>
        </div>
        <ul className={`right-nav ${isNav ? 'mobile-view' : ''}`}>
          <li><NavLink to='/' className={({isActive})=>isActive? "orange" : ""}>Home</NavLink></li>
          <li><NavLink to='/about' className={({isActive})=>isActive? "orange" : ""}>About</NavLink></li>
          <li><NavLink to='/country' className={({isActive})=>isActive? "orange" : ""}>Country</NavLink></li>
          <li><NavLink to='/contact' className={({isActive})=>isActive? "orange" : ""}>Contact</NavLink></li>
        </ul>
        <div className='icon' onClick={toggleNav}>
          <GiHamburgerMenu className={!isNav ? 'show' : 'hide'}/>
          <IoClose className={!isNav ? 'hide' : 'show'}/>
        </div>
      </nav>
    </div>
  )
}

export default Header