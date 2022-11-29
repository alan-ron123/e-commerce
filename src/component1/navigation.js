import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { FaSkype } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

function Navigation() {
  return (
    <div className="navbar bg-warning">
      <div className="nav mx-5 ps-5">
        <ul>help</ul>
        <ul>privacy</ul>
        <ul>legal</ul>
        <ul>contact</ul>
      </div>
      <div className="nav mx-5 ps-5">
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
    </div>
  );
}

export default Navigation;
