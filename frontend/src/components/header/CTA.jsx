import React from 'react'
import CV from '../../assets/HanifanHidayatullah.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a data-aos="fade-right" href={CV} download className='btn'>Download CV</a>
        <a data-aos="fade-left" href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA