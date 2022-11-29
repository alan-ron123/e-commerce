import React from "react";
import "./Navbar2.css";
import Image from "../logo/zupa.jpg";
function Navbar2() {
  return (
    <nav className="nav2">
      <div className="logo">
        <img src={Image} />
      </div>
      <div className="content">
        <ul>Home</ul>
        <ul>Experts</ul>
        <ul>Portfolio</ul>
        <ul>Blog</ul>
        <ul>Services</ul>
        <ul>Contact</ul>
      </div>
    </nav>
  );
}
export default Navbar2;
