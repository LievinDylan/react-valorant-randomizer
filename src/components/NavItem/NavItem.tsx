import React from 'react';
import { NavLink } from 'react-router-dom';

function NavItem({ name }: { name: string }) {
  return (
    <NavLink
      to="/"
      aria-label={`Navigate to the ${name} page`}
      className={({ isActive }) => (isActive ? 'font-bold m-2 btn' : 'p-2 btn')}
    >
      {name}
    </NavLink>
  );
}

export default NavItem;
