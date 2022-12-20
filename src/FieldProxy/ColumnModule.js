import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header";
import { useState } from "react";
function ColumnModule() {
  const [show, setShow] = useState(false);
  return (
    <div>
      {/* <Header /> */}
      <div className="card m-5">
        <form className="text-center border-2 m-5 ">
          <label>Name:</label>
          <input
            className="rounded border border-success m-2 w-25 "
            placeholder="Enter Your Name"
            // onChange={handleChange}
            // value={name}
          />
          <div>
            <div class="dropdown m-2">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </button>
              <ul class="dropdown-menu">
                <li>
                  <label>Date:</label>
                  <input type="date" />
                </li>
                <li>
                  <label> Age&nbsp;:</label>
                  <input type="number" />
                </li>
                <li>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Select Place</option>
                    <option value="1">Chennai</option>
                    <option value="2">Delhi</option>
                    <option value="3">Mumbai</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
          {/* {!show ? ( */}
          <button
            className="bg-success border-0 rounded m-2"
            // onClick={handleSubmit}
          >
            submit
          </button>
          {/* // ) : ( */}
          <button className="border-0 bg-success rounded mx-1">Update</button>
          {/* )} */}
        </form>
      </div>
    </div>
  );
}

export default ColumnModule;
