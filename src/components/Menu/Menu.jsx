import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>

      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <ul className="nav nav-pills">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Admin">Admin</Link>
          </li>
        </ul>
      </nav>

    </div>);
};

export default Menu;
