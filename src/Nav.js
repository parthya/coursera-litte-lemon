import React from "react";

import LogoSVG from "./assets/Logo.svg";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <img alt="logo" src={LogoSVG} />
        </li>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Menu</a>
        </li>
        <li>
          <a href="#">Reservations</a>
        </li>
        <li>
          <a href="#">Order Online</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
