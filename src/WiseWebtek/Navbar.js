import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WiseWebtek.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaDownload,
} from "react-icons/fa";
function Navbar() {
  return (
    <div className="d-flex my-3 justify-content-around">
      <h4 className="text-danger ms-5">WISEWEBTEK</h4>
      <button className="border-0 px-4 bg-success rounded">
        <FaDownload />
        Download Brochure
      </button>
      <p className=" ms-5">
        {" "}
        <span className="px-3">
          <FaFacebookF />
        </span>
        <span className="px-3">
          <FaTwitter />
        </span>
        <span className="px-3">
          <FaLinkedin />
        </span>
        <span className="px-3">
          <FaYoutube />
        </span>
      </p>
    </div>
  );
}

export default Navbar;
