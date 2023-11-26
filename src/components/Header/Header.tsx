import React from 'react';
import { NavLink } from 'react-router-dom';
import NavItem from '../NavItem/NavItem';

function Header() {
  return (
    <header
      className="w-full p-auto flex justify-between bg-green-500"
      aria-label="header of the application"
    >
      <h2 className="m-2 btn">LOGO</h2>
      <nav>
        <NavItem name="Solo" />
        <NavItem name="Team" />
      </nav>
    </header>
  );
}

export default Header;
