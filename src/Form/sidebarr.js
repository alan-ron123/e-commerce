import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaMobile, FaLaptop } from "react-icons/fa";
function Sidebarr() {
  return (
    <div>
      <div>
        <span>
          <NavLink className="linke" to="/body">
            <FaHome />
            Home
          </NavLink>
        </span>
        <hr />
        <span>
          <NavLink className="linke" to="/mobile">
            <FaMobile />
            Mobile
          </NavLink>
        </span>
        <hr />
        <span>
          <NavLink className="linke" to="/Laptop">
            <FaLaptop />
            Laptop
          </NavLink>
        </span>
        <hr />
      </div>
    </div>
  );
}

export default Sidebarr;
