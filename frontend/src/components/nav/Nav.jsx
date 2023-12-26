import React from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { FaAward } from "react-icons/fa";

const Nav = () => {
  return (
    <nav className="nav-menu">
      <a
        href="#home"
        title="Home"
        className="active"
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        title="About Me"
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        title="My Experience"
      >
        <FaAward />
      </a>
      <a
        href="#portfolio"
        title="Portfolio"
      >
        <BiBook />
      </a>
      <a
        href="#contact"
        title="Contact"
      >
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
