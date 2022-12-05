import React from 'react'
import './portofolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import {BsFillCaretDownFill} from 'react-icons/bs'

const Portofolio = () => {
  return (
    <section id='portfolio'>
    <h5 data-aos="fade">My Recent Work</h5>
    <h2 data-aos="fade">Portfolio</h2>
      <div className="container portfolio__container">
        <article data-aos="zoom-in" className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="image1" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank' rel="noopener noreferrer">Github</a>
            <a href="https://.com" className="btn btn-primary" target='_blank' rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        <article data-aos="zoom-in" className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="image2" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank' rel="noopener noreferrer">Github</a>
            <a href="https://.com" className="btn btn-primary" target='_blank' rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        <article data-aos="zoom-in" className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="image3" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank' rel="noopener noreferrer">Github</a>
            <a href="https://.com" className="btn btn-primary" target='_blank' rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        <article data-aos="zoom-in" className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="image4" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank' rel="noopener noreferrer">Github</a>
            <a href="https://.com" className="btn btn-primary" target='_blank' rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        <article data-aos="zoom-in" className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="image5" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank' rel="noopener noreferrer">Github</a>
            <a href="https://.com" className="btn btn-primary" target='_blank' rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
        <article data-aos="zoom-in" className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="image6" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com" className="btn" target='_blank' rel="noopener noreferrer">Github</a>
            <a href="https://.com" className="btn btn-primary" target='_blank' rel="noopener noreferrer">Live Demo</a>
          </div>
        </article>
      </div>
      <div className='more'>
        <button className="btn btn-primary">Show More <BsFillCaretDownFill style={{verticalAlign: 'text-top'}} /></button>
      </div>
    </section>
  )
}

export default Portofolio