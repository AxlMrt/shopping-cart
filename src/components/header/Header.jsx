import React from 'react';
import { NavLink } from 'react-router-dom';
import Icon from '@mdi/react';
import { mdiCartOutline } from '@mdi/js';

function Header({ addItems }) {
  return (
    <header className="header">
      <h1>Logo</h1>
      <nav className="w-1/2">
        <ul className="flex justify-around">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="flex">
              <Icon path={mdiCartOutline} size={1} /> {addItems.length}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
