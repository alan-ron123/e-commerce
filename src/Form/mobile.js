import React from "react";
import Data from "./data";
import Header from "./Header";
import "./body.css";
import { useState } from "react";
import Sidebarr from "./sidebarr";

function Mobile({ onAdd }) {
  const [search, setSearch] = useState("");
  function handleSearch(event) {
    setSearch(event.target.value);
  }
  return (
    <div>
      <Header searche={handleSearch} search={search} />
      <div className="spread">
        <div className="sidde">
          <Sidebarr />
        </div>
        <div className="flex">
          {Data.filter((val) => {
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

export default Mobile;
