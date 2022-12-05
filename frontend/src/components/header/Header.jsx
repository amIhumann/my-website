import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/hanipan.png'
import HeaderSocials from './HeaderSocials'
import "aos/dist/aos.css";

const Header = () => {
  return (
    <header id='home'>
      <div className="container header__container" >
        <h5 data-aos="fade">Hello I'm</h5>
        <h1 data-aos="fade">Hanifan Hidayatullah</h1>
        <h5 data-aos="fade" className='text-light'>Fullstack Developer</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header