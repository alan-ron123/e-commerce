import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import { useState } from "react";

export const TableModule = () => {
  // getting value from redux by useselector
  //sending value by dispatch to redux
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store.tableData);
  const [edit, setEdit] = useState(false);
  //name
  const [name, setName] = useState("");
  //   //date
  const [date, setDate] = useState("");
  //   //age
  const [age, setAge] = useState("");
  const [indexUpdate, setIndexUpdate] = useState(0);
  //   //location
  const [location2, setlocation2] = useState("");
  let navigate = useNavigate();

  function onEdit(index, dat) {
    setEdit(true);

    setName(dat.name);
    setDate(dat.date);
    setAge(dat.age);

    setIndexUpdate(index);
  }
  function reDirect1() {
    navigate("/");
  }
  function reDirect2() {
    navigate("/view");
  }
  function onClose1() {
    setEdit(false);
  }
  function onAdd() {
    let updatedValue = [...storeData];

    updatedValue[indexUpdate] = {
      name: name,
      date: date,
      age: age,
      location: location2,
    };
    dispatch({ type: "table", payload: updatedValue });
    setEdit(false);
  }
  const onDelete = (index) => {
    let updatedValue = [...storeData];
    updatedValue.splice(index, 1);
    dispatch({ type: "delete", payload: updatedValue });
  };
  return (
    <div>
      {edit ? (
        <div>
          <div className="container column ">
            <h1 className="text-center">Edit Module</h1>
            <table className="table container  text-light w-75">
              <thead className="bg-primary">
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Age</th>
                  <th>Location</th>
                  <th>Update</th>
                  <th>Clear Field</th>
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
                    <input
                      name="date"
                      value={date}
                      type="date"
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </td>
                  <td>
                    {" "}
                    <input
                      name="age"
                      value={age}
                      placeholder="age"
                      onChange={(e) => setAge(e.target.value)}
                      type="number"
                    />
                  </td>
                  <td>
                    <input
                      name="location1"
                      value={location2}
                      placeholder="location"
                      onChange={(e) => setlocation2(e.target.value)}
                      type="text"
                    />
                  </td>

                  <td>
                    {" "}
                    <button onClick={onAdd}>Submit</button>{" "}
                  </td>
                  <td>
                    <button onClick={onClose1}>close</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        ""
      )}{" "}
      <div className="container p-5">
        <h1 className="text-center">Table Module</h1>
        <div className="buttons">
          {" "}
          <button className="bg-dark text-light" onClick={reDirect1}>
            Go Back
          </button>
          <button className="bg-dark text-light" onClick={reDirect2}>
            View Table
          </button>
        </div>
        <table className="table table-border text-center    w-100">
          <Table striped bordered hover className="my-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Age</th>
                <th>Place</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>

            {console.log(storeData, "tabledatav")}

            {storeData.map((dat, index) => {
              return (
                <tbody>
                  <tr>
                    <td key={index} index={index}>
                      {dat.name}
                    </td>

                    <td>{dat.date}</td>
                    <td>{dat.age}</td>
                    <td>{dat.location}</td>
                    <td>
                      <button className="border-0 bg-warning rounded">
                        {" "}
                        onClick={() => onEdit(index, dat)}>edit
                      </button>
                    </td>
                    <td>
                      {" "}
                      <button
                        className="border-0 bg-danger rounded mx-1"
                        onClick={() => onDelete(index, dat)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </Table>
        </table>
      </div>
    </div>
  );
};
