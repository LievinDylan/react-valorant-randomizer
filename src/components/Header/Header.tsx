import React from 'react';
import NavItem from '../NavItem/NavItem';

function Header() {
  return (
    <header
      className="w-full p-auto flex justify-center bg-secondary h-16"
      aria-label="header of the application"
    >
      <nav>
        <NavItem name="Solo" />
        <NavItem name="Team" />
      </nav>
    </header>
  );
}

export default Header;
