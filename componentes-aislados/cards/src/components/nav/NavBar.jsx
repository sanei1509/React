import React from "react";
import "./NavBar.css";

import { BiCodeAlt } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav>
      <a href="#render-home-page" className="">
        <AiOutlineHome />
      </a>
      <a href="#render-favorite-page">
        <BsFillHeartFill />
      </a>
      <a href="#render-create">
        <BiCodeAlt />
      </a>
      <a href="#render-account-page">
        <RiAccountCircleFill />
      </a>
    </nav>
  );
};

export default NavBar;
