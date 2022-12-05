import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#a" className='footer__logo'>Hanifan</a>
      <ul className='permalinks'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Gallery</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com/dayat.senju"><FaFacebookF /></a>
        <a href="https://instagram.com/_hanipan"><FiInstagram /></a>
        <a href="https://twitter.com/HanifanHidayat1?t=GjEGiD0YpIUVWxRoJdMwZw&s=08"><IoLogoTwitter /></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Hanif-H. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer