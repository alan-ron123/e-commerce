import React, { Component } from "react";
import Items from "../Form/Items";
import ClassHeader from "./classHeader";
import "../Form/body.css";
// import Header from "./Header.js";

import Sidebarr from "./sidebarr";

class ClassBody extends Component(this.props) {
  constructor() {
    super();
    this.state = [];
  }
  handleSearch(event) {
    this.setState(event.target.value);
  }
  // console.log("cart", cart);
  render() {
    return (
      <div>
        <div className="position-sticky">
          <ClassHeader />
        </div>

        <div className="spread">
          <div className="sidde">
            <Sidebarr />
          </div>
          <div className="flex">
            {Items.filter((val) => {
              if (state === "") {
                return val;
              } else if (val.name.toLowerCase().includes(state)) {
                return val;
              }
            }).map((data) => {
              const { img, name, price } = data;
              return (
                <div>
                  <div className="card border-0" key={data.id}>
                    <img className="image1" src={img} />
                    <p className="nameItem">{name}</p>
                    <p className="color">${price}</p>
                    <button
                      className="buton"
                      onClick={() => this.props.onAdd(data)}
                    >
                      add cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default ClassBody;
