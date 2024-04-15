import React, { useContext } from 'react'
import { GlobalState } from '../../index';

const CTA = ({cv}) => {
  const url = useContext(GlobalState).url;
  return (
    <div className="cta">
        <a data-aos="fade-right" href={`${url}files/${cv?.imgCv}`} download className='btn' style={{zIndex:1}} >Download CV</a>
        <a data-aos="fade-left" href="#contact" className='btn btn-primary' style={{zIndex:1}}>Let's Talk</a>
    </div>
  )
}

export default CTA