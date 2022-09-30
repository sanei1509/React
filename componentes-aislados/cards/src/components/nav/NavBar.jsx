import React from "react";
import "./NavBar.css";

import { IoLogoCodepen } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav>
      <a href="#render-home-page" className="active">
        <AiOutlineHome />
      </a>
      <a href="#render-favorite-page">
        <BsFillHeartFill />
      </a>
      <a href="#render-create">
        <IoLogoCodepen />
      </a>
      <a href="#render-account-page">
        <RiAccountCircleFill />
      </a>
    </nav>
  );
};

export default NavBar;
