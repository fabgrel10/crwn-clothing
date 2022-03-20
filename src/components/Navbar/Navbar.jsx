import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as CrwnLogo } from '../../assets/images/crown.svg';

import './Navbar.scss';

const Navbar = () => (
  <>
    <div className="navbar">
      <Link className="navbar__logo-container" to="/">
        <CrwnLogo className="navbar__logo" />
      </Link>
      <div className="navbar__links">
        <Link className="navbar__link" to="/">
          Home
        </Link>
      </div>
    </div>
    <Outlet />
  </>
);

export default Navbar;
