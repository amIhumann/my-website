import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
import { BsLinkedin } from "react-icons/bs";

const Footer = ({sosmed}) => {
  return (
    <footer className="footer-20192">
      <div className="site-section">
        <div className="container">

          <div className="cta d-block d-md-flex align-items-center px-5">
            <div>
              <h2 className="mb-0">Ready to turn your software idea into a project ?</h2>
              <h3>Let's get started!</h3>
            </div>
            <div className="ml-auto">
              <a href={sosmed?.phone} className="btn contact-us rounded-2 py-3">Contact me</a>
            </div>
          </div>
          <div className="row">

            <div className="col-sm">
              <a href="/" className="footer-logo">Hanif-H</a>
              <p className="copyright">
                <small>&copy; All rights reserved.</small>
              </p>
            </div>
            <div className="col-sm">
              <h3>Services</h3>
              <ul className="list-unstyled links">
                <li><a href="#services">Digital Marketing</a></li>
                <li><a href="#services">Mobile/Web Development</a></li>
                <li><a href="#services">Data Analyst</a></li>
              </ul>
            </div>
            <div className="col-sm">
              <h3>About</h3>
              <ul className="list-unstyled links">
                <li><a href="#experiences">Skills</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="col-sm">
              <h3>Further Information</h3>
              <ul className="list-unstyled links">
                <li><a href="/">Terms &amp; Conditions</a></li>
                <li><a href="/">Privacy Policy</a></li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3>Follow</h3>
              <ul className="list-unstyled social">
                <li><a href={sosmed?.facebook}><FaFacebookF /></a></li>
                <li><a href={sosmed?.instagram}><FiInstagram /></a></li>
                <li><a href={sosmed?.twitter}><IoLogoTwitter /></a></li>
                <li><a href={sosmed?.linkedin}><BsLinkedin /></a></li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </footer>
    // <footer classNameName="section">
    //   <a href="#a" classNameName="footer__logo">
    //     Hanifan
    //   </a>
    //   <ul classNameName="permalinks">
    //     <li>
    //       <a href="#home">Home</a>
    //     </li>
    //     <li>
    //       <a href="#about">About</a>
    //     </li>
    //     <li>
    //       <a href="#experience">Experience</a>
    //     </li>
    //     <li>
    //       <a href="#portfolio">Portfolio</a>
    //     </li>
    //     <li>
    //       <a href="#testimonials">Gallery</a>
    //     </li>
    //     <li>
    //       <a href="#contact">Contact</a>
    //     </li>
    //   </ul>
    //   <div classNameName="footer__socials">
    //     <a href="https://facebook.com/dayat.senju">
    //       <FaFacebookF />
    //     </a>
    //     <a href="https://instagram.com/_hanipan">
    //       <FiInstagram />
    //     </a>
    //     <a href="https://twitter.com/HanifanHidayat1?t=GjEGiD0YpIUVWxRoJdMwZw&s=08">
    //       <IoLogoTwitter />
    //     </a>
    //   </div>
    //   <div classNameName="footer__copyright">
    //     <small>&copy; Hanif-H. All rights reserved.</small>
    //   </div>
    // </footer>
  );
};

export default Footer;
