import React from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaThList } from "react-icons/fa";
import "./sidebar.css";
function Sidebar() {
  return (
    <div>
      <div className="sidebar">
        {/* <button className="buttone-bar">
          <FaThList />
        </button> */}
        <p>
          <NavLink className="linke" to="/body">
            Home
          </NavLink>
        </p>

        <p>
          <NavLink className="linke" to="/mobile">
            Mobile
          </NavLink>
        </p>

        <p>
          <NavLink className="linke" to="/Laptop">
            Laptop
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Sidebar;
