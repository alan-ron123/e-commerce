import React from "react";
import "./Navbar.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaSkype } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
function Navbar() {
  return (
    <nav className="nav1">
      <div className="content">
        <ul>Help</ul>
        <ul>Privacy</ul>
        <ul>Legal</ul>
        <ul>Contact</ul>
      </div>
      <div className="logo">
        <ul>
          <FaFacebookSquare />
        </ul>
        <ul>
          <FaTwitter />
        </ul>
        <ul>
          <AiOutlineGooglePlus />
        </ul>
        <ul>
          <FaSkype />
        </ul>
        <ul>
          <ImInstagram />
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
