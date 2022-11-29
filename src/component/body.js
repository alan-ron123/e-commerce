import React from "react";
import "./body.css";
import Image from "../logo/body.jpg";
function Body() {
  return (
    <div className="text">
      <div className="split">
        <h3>Meet Out Experts</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
          <br></br>
          <br></br>
          <br></br>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          d pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="right">
        <img src={Image} className="image1" alt="Body" />
      </div>
    </div>
  );
}
export default Body;
