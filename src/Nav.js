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
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/booking">Reservations</a>
        </li>
        <li>
          <a href="/order">Order Online</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
