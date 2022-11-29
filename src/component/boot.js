import React from "react";
//import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import images from "../logo/body.jpg";

function Bootstrap() {
  return (
    <>
      <div className="navbar bg-warning">
        <div>
          <ul className="nav mx-5 ps-5">
            <li className="nav-item">
              <a className="nav-link text-black" href="#">
                Help
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">
                Privacy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">
                Legal
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black" href="#">
                Contacts
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="nav  mx-5 pe-5">
            <li className="nav-item px-3">
              <a className="nav-link text-black" href="#">
                <FaFacebook />
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-black" href="#">
                <FaTwitter />
              </a>
            </li>
            <li className="nav-item px-3">
              <a className="nav-link text-black" href="#">
                <FaLinkedin />
              </a>
            </li>
            <li className="nav-item  px-3 ">
              <a className="nav-link text-black" href="#">
                <FaGooglePlay />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar bg-white ms-5">
        <h1 className="text-black mx-5 ">
          Zupa<span className="text-warning">Builders</span>
        </h1>
        <ul className="nav mx-5 pe-5">
          <li className="nav-item">
            <a className="nav-link text-black" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#">
              Experts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#">
              PortFolio
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#">
              Blog
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#">
              Services
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar bg-light ms-5">
        <h1 className="mx-5">Experts</h1>
        <ul className="nav mx-5 pe-5">
          <li className="nav-item">
            <a className="nav-link text-black" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#">
              /
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-black" href="#">
              Experts
            </a>
          </li>
        </ul>
      </div>
      <div style={{ height: "300px" }}>
        <div className="container mt-4 d-flex h-100 mb-5">
          <div className="col-6 h-100">
            <h1>Meet our experts</h1>
            <p className="text-muted">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores iste eaque iusto maxime atque deleniti. Harum porro
              rerum
              <br></br> <br></br>
              <br></br>
              praesentium non corporis totam maiores! Placeat, mollitia esse
              odio autem recusandae laborum corrupti quaerat minus dolorem earum
              fugit, molestias velit expedita maiores!praesentium non corporis
              totam maiores! Placeat, mollitia esse odio autem recusandae
              laborum corrupti quaerat minus dolorem earum fugit, molestias
              velit expedita maiores!
            </p>
          </div>
          <div className="col-6 h-100 ps-5 ">
            <img className="img-fluid h-100 ms-5 " src={images} />
          </div>
        </div>
      </div>
      <div className="container-fluid bg-warning d-flex ps-5  mt-5 mb-5">
        <div className="col-3 text-white ms-5 ">
          <h3>3200+</h3>
          <p>Completed Projects</p>
        </div>
        <div className="col-3 text-white">
          <h3>4900</h3>
          <p>Built Houses</p>
        </div>
        <div className="col-3 text-white">
          <h3>6000</h3>
          <p>Satisfied Customers</p>
        </div>
        <div className="col-3 text-white">
          <h3>1900</h3>
          <p>Cups of Coffee</p>
        </div>
      </div>
      <div className="container text-center pt-5">
        <h1>The Team</h1>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          iste eaque iusto maxime atque deleniti. Harum porro rerum<br></br>{" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          iste eaque
        </p>
      </div>
      <div style={{ height: "300px" }}>
        <div className="container h-75 d-flex pt-4">
          <div className="col-3 h-100 text-center ">
            <img className="h-100" src={images} />
            <h3>Zoro</h3>
            <p>World's Best Swordsmen</p>
          </div>
          <div className="col-3 h-100 text-center">
            <img className="h-100" src={images} />
            <h3>Sanji</h3>
            <p>World's Best Cook</p>
          </div>
          <div className="col-3 h-100 text-center">
            <img className="h-100" src={images} />
            <h3>Nami</h3>
            <p>World's Best Navigator</p>
          </div>
          <div className="col-3 h-100 text-center">
            <img className="h-100" src={images} />
            <h3>Usopp</h3>
            <p> Captain of Usopp Pirates</p>
          </div>
        </div>
      </div>
      <div style={{ height: "400px" }}>
        <div className="container-fluid h-100 bg-dark d-flex px-5">
          <div className="col-3 h-100 text-white py-3">
            <h3>About Us</h3>
            <p>
              {" "}
              praesentium non corporis totam maiores! Placeat, mollitia esse
              odio autem recusandae laborum corrupti quaerat minus dolorem earum
              fugit, molestias velit expedita maiores!praesentium non corporis
              totam maiores! Placeat, mollitia esse odio autem recusandae
              laborum corrupti quaerat minus dolorem earum fugit, molestias
              velit expedita maiores!
            </p>
            <ul className="nav  mx-5 ">
              <li className="nav-item ">
                <a className="nav-link text-muted p-2  mx-3" href="#">
                  <FaFacebook />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-muted p-2  mx-3" href="#">
                  <FaTwitter />
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-muted p-2  mx-3" href="#">
                  <FaLinkedin />
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link text-muted p-2  mx-3" href="#">
                  <FaGooglePlay />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-4 text-white  py-3 ms-5 h-100 ">
            <h3>Instagram Widget</h3>
            <div className="container d-flex h-100">
              <div className="col-4 h-25">
                <img className="h-100" src={images} />
              </div>
              <div className="col-4 h-25">
                <img className="h-100" src={images} />
              </div>
              <div className="col-4 h-25">
                <img className="h-100" src={images} />
              </div>
            </div>
          </div>
          <div className="col-3 text-white py-3">
            <h3>About Us</h3>
            <p>
              {" "}
              praesentium non corporis totam maiores! Placeat, mollitia esse
              odio autem recusandae laborum corrupti quaerat minus dolorem earum
              fugit, molestias velit expedita maiores!praesentium non corporis
              totam maiores! Placeat, mollitia esse odio autem recusandae
              laborum corrupti quaerat minus dolorem earum fugit, molestias
              velit expedita maiores!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bootstrap;
