import React from "react";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../../assets/css/tableview.css";

export const TableView = () => {
  // getting value from redux by useselector
  const storeData = useSelector((store) => store.tableData);

  let navigate = useNavigate();

  function reDirect1() {
    navigate("/");
  }
  function reDirect2() {
    navigate("/table");
  }

  return (
    <div>
      {" "}
      <div className="container p-5">
        <h1 className="text-center">View Module</h1>
        <div className="buttons">
          {" "}
          <button className="bg-dark text-light" onClick={reDirect1}>
            Go Back
          </button>
          <button className="bg-dark text-light" onClick={reDirect2}>
            Edit Table
          </button>
        </div>
        <table className="table table-border  text-center    w-100">
          <Table striped bordered hover className="my-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Age</th>
                <th>Place</th>
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
