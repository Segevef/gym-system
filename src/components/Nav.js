import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  const activestyle = { color: "orange" };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        My GYM
      </NavLink>{" "}
      |
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink
              activeStyle={activestyle}
              className="nav-link"
              exact
              to="/"
            >
              Classes <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeStyle={activestyle}
              className="nav-link"
              to="/my-classes"
            >
              My Classes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeStyle={activestyle}
              className="nav-link"
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
