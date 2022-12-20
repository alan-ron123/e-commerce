import React from "react";
import { FaPhoneAlt, FaListAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WiseWebtek.css";
function Header() {
  return (
    <div id="innovation" className="d-flex justify-content-around">
      <div className="  m-auto text-center">
        <FaPhoneAlt />
        +91-96773 48484
      </div>
      <div className=" my-auto">
        <MdMail />
        wisewebtek@gmail.com
      </div>
      <div className=" m-auto text-center">
        <div class="dropdown">
          <button
            class="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FaListAlt /> Need help
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
