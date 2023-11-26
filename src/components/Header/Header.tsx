import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header aria-label="header of the application">
      <h2 className="flex flex-column">Valolol</h2>
      <nav>
        <NavLink
          to="/"
          aria-label="Navigate to the homepage"
          className={({ isActive }) => (isActive ? 'font-bold' : '')}
        >
          Homepage
        </NavLink>
        <NavLink to="/randomizer" aria-label="Navigate to the valosolo page">
          Valosolo
        </NavLink>
        <NavLink
          to="/team-randomizer"
          aria-label="Navigate to the valoteam page"
        >
          Valoteam
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
