import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaPowerOff, FaSearch } from "react-icons/fa";
import "./body.css";
import Sidebar from "./sidebar";
import { Link } from "react-router-dom";
import OffcanvasExample from "./bar";
import "./bar.css";
import Svg from "../logo/home-page-logo.gif";

function Header({ cart, search, searche }) {
  return (
    <div className="stick">
      <div className="container1">
        <div className="shrink">
          <OffcanvasExample />
        </div>
        <div className="svg">
          <img src={Svg} className="imgsize" />
        </div>
        <div className="amaze">Doodle</div>
        <div className="expand">
          <Sidebar />
        </div>
        <div className="plac">
          <div className="place">
            <FaSearch />
          </div>
          <input
            className="searche"
            type="text"
            placeholder="search..."
            value={search}
            onChange={searche}
          />
        </div>
        <div>
          <Link className="icon" to="/cart">
            <FaShoppingCart />
          </Link>
          {/* <span className="cart-length">
            {cart.length === 0 ? "" : cart.length}
          </span> */}
        </div>
        <div className="log">
          <Link className="power" to="/">
            <FaPowerOff />
          </Link>

          <span className="logout"> logout</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
