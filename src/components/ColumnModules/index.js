import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../assets/css/column.css";
import "../../assets/css/table.css";

export default function ColumnModule() {
  //sending value by dispatch to redux
  const dispatch = useDispatch();

  const [select, setSelect] = useState(false);
  //name
  const [name, setName] = useState("");
  //date
  const [date, setDate] = useState("");
  //age
  const [age, setAge] = useState("");

  //location
  const [location, setlocation] = useState({
    place: [],
    response: [],
  });

  function onselect() {
    setSelect(true);
  }

  const handleChange = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { place } = location;

    console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setlocation({
        place: [...place, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setlocation({
        place: place.filter((e) => e !== value),
      });
    }
  };
  function onAdd(e) {
    e.preventDefault();
    let updatedValue = [...storeData];
    if (!name) {
      alert("enter the name");
    } else if (!date) {
      alert("enter the date");
    } else if (!age) {
      alert("enter the age");
    } else {
      updatedValue.push({
        name: name,
        date: date,
        age: age,
        location: location.place,
      });
      navigate("/table ");
      dispatch({ type: "store", payload: updatedValue });
      setSelect(false);
    }
  }
  // getting value from redux by useselector
  const storeData = useSelector((store) => store.tableData);
  console.log(storeData, "tabledata");

  let navigate = useNavigate();

  function reDirect1() {
    navigate("/table ");
  }

  function reDirect2() {
    navigate("/view");
  }
  function reDirect3() {
    navigate("/");
  }

  return (
    <div clas="container border p-5   ">
      {select ? (
        <div className="container w-25 float-end bg-dark text-light p-3 text-center">
          <h4>Select Area</h4>

          <form onSubmit={handleChange}>
            <div className="form-check container  m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="place"
                value="chennai "
                id="flexCheckDefault"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Chennai
              </label>
            </div>
            <br />
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="place"
                value="Mumbai "
                id="flexCheckDefault"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Mumbai
              </label>
            </div>
            <br />
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="place"
                value="Delhi "
                id="flexCheckDefault"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Delhi
              </label>
            </div>
            <br />
          </form>
        </div>
      ) : (
        ""
      )}
      <div className="overall">
        <div>
          <nav class="navbar navbar-expand-sm bg-primary p-5 ">
            <div class="container-fluid ">
              <ul class="navbar-nav menu">
                <div>
                  {" "}
                  <li class="nav-item active ">
                    <a class="nav-link active  text-light " onClick={reDirect3}>
                      <h3>Column</h3>
                    </a>
                  </li>
                </div>
                <div>
                  <li class="nav-item">
                    <a class="nav-link  text-light" onClick={reDirect1}>
                      <h3>Table</h3>
                    </a>
                  </li>
                </div>
                <div>
                  {" "}
                  <li class="nav-item">
                    <a class="nav-link  text-light" onClick={reDirect2}>
                      <h3>Table View</h3>
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          </nav>
        </div>
        <div>
          <div className="container column text-center  ">
            <h1>Column Module</h1>
            <table className="table container w-75">
              <thead className="bg-primary text-light">
                <tr>
                  <th>Name</th>
                  <th>Details</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input
                      name="name"
                      placeholder="name"
                      value={name}
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </td>
                  <td>
                    {" "}
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
                          <button className="border-0 bg-success rounded mx-1">
                            Update
                          </button>
                          {/* )} */}
                        </form>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div class="dropdown">
                      <button
                        type="button"
                        class="btn btn-primary dropdown-toggle bg-dark"
                        data-bs-toggle="dropdown"
                      >
                        Dropdown button
                      </button>
                      <ul class="dropdown-menu">
                        <li>
                          <a class="dropdown-item" href="#">
                            Date Of Birth :
                            <input
                              name="date"
                              value={date}
                              type="date"
                              onChange={(e) => setDate(e.target.value)}
                            />
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Age :
                            <input
                              name="age"
                              value={age}
                              placeholder="age"
                              onChange={(e) => setAge(e.target.value)}
                              type="number"
                            />
                          </a>
                        </li>
                        <li>
                          <h5 class="dropdown-header">MultiSelect</h5>
                        </li>{" "}
                        <button onClick={onselect}>Location</button>{" "}
                      </ul>
                    </div>
                  </td>
                  <td>
                    <button onClick={onAdd}>submit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
