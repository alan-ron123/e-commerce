import React from "react";
import "./WiseWebtek.css";
import { Link } from "react-router-dom";
function Header1() {
  return (
    <div id="offers" className="d-flex py-3  justify-content-center">
      <button className="border-0 px-4 bg-warning rounded">offers</button>

      <div className="px-4">
        <Link to="about" className="text-decoration-none  text-danger">
          About us
        </Link>
      </div>

      <div className="px-4">Web Design</div>
      <div className="px-4">Digital Marketing</div>
      <div className="px-4">Web Security</div>
      <div className="px-4">Development</div>
      <div className="px-4">2D/3D Animation</div>
      <div className="px-4">Web Accessibility</div>
    </div>
  );
}

export default Header1;
