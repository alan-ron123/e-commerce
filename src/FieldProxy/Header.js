import React from "react";
import { NavLink } from "react-router-dom";
import "./proxy.css";
function Header() {
  return (
    <div className="d-flex bg-light py-3">
      <div className="mx-5">
        {" "}
        <NavLink className="link" to="/">
          Home
        </NavLink>
      </div>
      <div className="mx-5">
        <NavLink className="link" to="/table">
          Table
        </NavLink>
      </div>
      <div className="mx-5">
        <NavLink className="link" to="/view">
          View
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
