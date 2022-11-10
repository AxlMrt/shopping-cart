import React from 'react';
import { NavLink } from 'react-router-dom';

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
            <NavLink to="/cart">Cart {addItems.length}</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
