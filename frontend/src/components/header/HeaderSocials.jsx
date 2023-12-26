import React from 'react'
import {BsLinkedin,BsFacebook,BsInstagram,BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a className='zoom' href="https://linkedin.com/in/hanifan-hidayatullah-5420ba23b" target='_blank' rel="noopener noreferrer"><BsLinkedin /></a>
        <a className='zoom' href="https://facebook.com/dayat.senju" target='_blank' rel="noopener noreferrer"><BsFacebook /></a>
        <a className='zoom' href="https://instagram.com/_hanipan" target='_blank' rel="noopener noreferrer"><BsInstagram /></a>
        <a className='zoom' href="https://github.com/amIhumann" target='_blank' rel="noopener noreferrer"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials