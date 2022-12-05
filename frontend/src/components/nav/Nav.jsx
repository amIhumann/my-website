import React from 'react'
import './nav.css'
import{AiOutlineHome,AiOutlineUser} from 'react-icons/ai'
import{BiBook,BiMessageSquareDetail} from 'react-icons/bi'
import {FaAward} from'react-icons/fa'
import { useState } from 'react'

const Nav = () => {
  const [active,setActive]=useState('#home')
  return (
    <nav>
      <a href="#home" title="Home" onClick={()=>setActive('#home')} className={active==='#home'?'active':''}><AiOutlineHome/></a>
      <a href="#about" title="About Me" onClick={()=>setActive('#about')} className={active==='#about'?'active':''}><AiOutlineUser/></a>
      <a href="#experience" title="My Experience" onClick={()=>setActive('#experience')} className={active==='#experience'?'active':''}><FaAward/></a>
      <a href="#portfolio" title="Portfolio" onClick={()=>setActive('#portfolio')} className={active==='#portfolio'?'active':''}><BiBook/></a>
      <a href="#contact" title="Contact" onClick={()=>setActive('#contact')} className={active==='#contact'?'active':''}><BiMessageSquareDetail/></a>      
    </nav>
  )
}

export default Nav