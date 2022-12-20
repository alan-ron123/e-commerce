import React from "react";
import images from "../logo/feature-iamge.png";
function Categories() {
  return (
    <div>
      <h4 className="text-center fw-bold text-danger">Portfolio</h4>
      <div className="text-center">
        <img className="w-25" src={images} />
        <img className="w-25 mx-5" src={images} />
        <img className="w-25" src={images} />
      </div>
      <div className="text-center my-5">
        <img className="w-25" src={images} />
        <img className="w-25 mx-5" src={images} />
        <img className="w-25" src={images} />
      </div>
    </div>
  );
}

export default Categories;
