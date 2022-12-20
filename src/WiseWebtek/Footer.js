import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WiseWebtek.css";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaClock,
} from "react-icons/fa";
import { MdMail, MdLocationOn } from "react-icons/md";
function Footer() {
  return (
    <div id="Footer" className="row m-0 border-0">
      <div className="col-1 m-0"></div>
      <div className="col-3 mt-1">
        <h5>TERMS & POLICIES</h5>
        <br />
        <p>privacy policy</p>
        <hr />
        <p>privacy policy</p>
        <hr />
        <p>privacy policy</p>
        <hr />
      </div>
      <div className="col-1"></div>
      <div className="col-3 mt-1">
        <h5>CONTACT US</h5>
        <br />
        <p className="text-warning">
          <MdLocationOn />
          Visit Us
        </p>
        <p className="my-0">
          No.20/9,Janaki Complex
          <br />
          Sardar Patel Road,Adyar
          <br />
          Chennai-600020
        </p>
        <br />
        <p className="text-warning">
          <MdMail />
          Email
        </p>
        <p className="my-0">wisewebtek@gmail.com</p>
        <br />
        <p className="text-warning">
          <FaPhoneAlt />
          Customer Care
        </p>
        <p className="my-0">+91-96773 48484</p>
      </div>
      <div className="col-1"></div>
      <div className="col-3 mt-1">
        <h6>JOIN OUR NEWS LETTER AND GET</h6>
        <br />
        <input className="rounded" placeholder="Enter Your Email" />
        <br />
        <br />

        <h5>WORKING HOURS</h5>
        <p>
          <FaClock />
          <span className="text-warning">
            Mon to Sat
            <br />
            10 am-8 pm
          </span>
        </p>
        <br />
        <h5>FOLLOW ON SOCIALS</h5>
        <p className="m-0">
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
      <div className="my-1 text-center opacity-25">
        Copyrights © 2019 WiseWebTek All Rights Reserved
      </div>
    </div>
  );
}

export default Footer;
