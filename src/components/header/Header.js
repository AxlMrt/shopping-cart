import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="w-screen flex">
      <h1>Logo</h1>
      <nav>
        <ul className="flex">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/sign-in">Sign-in</NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
