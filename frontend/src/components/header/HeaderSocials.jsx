import React from 'react'
import {BsLinkedin,BsFacebook,BsInstagram,BsGithub} from 'react-icons/bs'

const HeaderSocials = ({sosmed}) => {
  return (
    <div className='header__socials'>
        <a className='zoom' href={sosmed?.linkedin} target='_blank' rel="noopener noreferrer"><BsLinkedin /></a>
        <a className='zoom' href={sosmed?.facebook} target='_blank' rel="noopener noreferrer"><BsFacebook /></a>
        <a className='zoom' href={sosmed?.instagram} target='_blank' rel="noopener noreferrer"><BsInstagram /></a>
        <a className='zoom' href={sosmed?.github} target='_blank' rel="noopener noreferrer"><BsGithub /></a>
    </div>
  )
}

export default HeaderSocials