import React, { useState, useLayoutEffect } from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/hanipan.png";
import sun from "../../assets/sun.svg";
import img from "../../assets/bg-texture.png";
import moon from "../../assets/moon.svg";
import HeaderSocials from "./HeaderSocials";
import "aos/dist/aos.css";
import { BsChevronDoubleDown, BsChevronDoubleUp } from "react-icons/bs";

const Header = () => {
  let root = document.querySelector(':root');
  let rootProperty = getComputedStyle(root);
  let body = document.querySelector('body');
  let bodyProperty = getComputedStyle(body);

  const [nameClass, setNameClass] = useState("");
  const [iconToggle, setIconToggle] = useState(<BsChevronDoubleDown />);
  const [theme, setTheme] = useState({
    colorBg : '#1f1f38',
    colorBgVariant : '#2c2c6c',
    colorPrimary : '#6DAFFE',
    colorPrimaryVariant : 'rgba(77,181,255,0.4)',
    colorWhite : '#fff',
    colorLight : 'rgba(255,255,255,0.6)',
    backgroundImage : `url('${img}')`,
  });

  useLayoutEffect(()=>{
    const hours = new Date().getHours();
    if(!(hours > 6 && hours < 20)){
      document.getElementById('toggle__theme').click();
    }
  },[]);

  function toggleDropdown(e) {
    e.preventDefault();

    setNameClass((value) => {
      if (!value) {
        setIconToggle(<BsChevronDoubleUp />);
        return "show_dropdown";
      }
      setIconToggle(<BsChevronDoubleDown />);
      return "";
    });
  }

  function changeTheme() {
    setTheme(()=>{
      let nextTheme = {
        colorBg : rootProperty.getPropertyValue('--color-bg'),
        colorBgVariant : rootProperty.getPropertyValue('--color-bg-variant'),
        colorPrimary : rootProperty.getPropertyValue('--color-primary'),
        colorPrimaryVariant : rootProperty.getPropertyValue('--color-primary-variant'),
        colorWhite : rootProperty.getPropertyValue('--color-white'),
        colorLight : rootProperty.getPropertyValue('--color-light'),
        backgroundImage : bodyProperty.getPropertyValue('background-image'),
      }

      root.style.setProperty('--color-bg', theme.colorBg);
      root.style.setProperty('--color-bg-variant', theme.colorBgVariant);
      root.style.setProperty('--color-primary', theme.colorPrimary);
      root.style.setProperty('--color-primary-variant', theme.colorPrimaryVariant);
      root.style.setProperty('--color-white', theme.colorWhite);
      root.style.setProperty('--color-light', theme.colorDark);
      body.style.backgroundImage = theme.backgroundImage;

      return nextTheme;
    });
  }

  return (
    <>
      <div className={`drop-down ${nameClass}`}>
        <div className="dropdown__theme">
          <input type="checkbox" id="toggle__theme" onChange={changeTheme} />
          <label htmlFor="toggle__theme">
            <img src={sun} className="sun" alt="sun" />
            <img src={moon} className="moon" alt="moon" />
          </label>
        </div>
        <span onClick={toggleDropdown}>{iconToggle}</span>
      </div>
      <header id="home" className="section">
        <div className="container header__container">
          <h5 data-aos="fade">Hello I'm</h5>
          <h1 data-aos="fade">Hanifan Hidayatullah</h1>
          <h5 data-aos="fade">Fullstack Developer</h5>
          <CTA />
          <HeaderSocials />

          <div className="me">
            <div className="image-contain"></div>
            <img src={ME} alt="me" />
          </div>

          <a href="#contact" className="scroll__down zoom">
            Scroll Down
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
