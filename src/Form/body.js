import React from "react";
import "./body.css";
import Header from "./Header.js";
import { Items } from "./Items";
import { useState } from "react";
import Sidebarr from "./sidebarr";

function Body({ onAdd, cart }) {
  const [search, setSearch] = useState("");
  function handleSearch(event) {
    setSearch(event.target.value);
  }
  console.log("cart", cart);

  return (
    <div>
      <div className="position-sticky">
        <Header searche={handleSearch} cart={cart} search={search} />
      </div>

      <div className="spread">
        <div className="sidde">
          <Sidebarr />
        </div>
        <div className="flex">
          {Items.filter((val) => {
            if (search === "") {
              return val;
            } else if (val.name.toLowerCase().includes(search)) {
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
                  <button className="buton" onClick={() => onAdd(data)}>
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
export default Body;
