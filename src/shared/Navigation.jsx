import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="Navigation">
      <NavLink
        to="/"
        exact
        activeClassName="Navigation-item--active"
        className="Navigation-item">
        Posts
      </NavLink>
      <NavLink
        to="/users"
        activeClassName="Navigation-item--active"
        className="Navigation-item">
        Users
      </NavLink>
      <NavLink
        to="/comments"
        activeClassName="Navigation-item--active"
        className="Navigation-item">
        Comments
      </NavLink>
    </nav>
  );
};

export default Navigation;
