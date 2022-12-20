import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstalod,
  FaInstagram,
  FaBuysellads,
  FaCreativeCommonsNc,
  FaFirstOrderAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer class="bg-light" id="fooder">
      <div className="container-fluid text-center ">
        <div className="row p-2">
          <div className="col-4"></div>
          <div className="col-4 d-flex  justify-content-center md-4  ">
            <div className="px-1">
              <FaFacebookF />
            </div>
            <div className="px-1">
              <FaTwitter />
            </div>
            <div className="px-1">
              <FaGooglePlusG />
            </div>
            <div className="px-1">
              <FaInstalod />
            </div>
            <div className="px-1">
              <FaInstagram />
            </div>
            <div className="px-1">
              <FaBuysellads />
            </div>
            <div className="px-1">
              <FaCreativeCommonsNc />
            </div>
            <div className="px-1">
              <FaFirstOrderAlt />
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
      <div className="text-center">
        <h5>MINPO</h5>
        <small className="text-secondary" id="text">
          COPYRIGHT @ 2016 ALL RIGHTS ARE RESIVED
        </small>
      </div>
    </footer>
  );
}

export default Footer;
