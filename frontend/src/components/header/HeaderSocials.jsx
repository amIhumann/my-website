import React from 'react'
import {BsLinkedin,BsFacebook,BsInstagram,BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com/in/hanifan-hidayatullah-5420ba23b" target='_blank' rel="noopener noreferrer"><BsLinkedin /></a>
        <a href="https://facebook.com/dayat.senju" target='_blank' rel="noopener noreferrer"><BsFacebook /></a>
        <a href="https://instagram.com/_hanipan" target='_blank' rel="noopener noreferrer"><BsInstagram /></a>
        <a href="https://github.com/amIhumann" target='_blank' rel="noopener noreferrer"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials