import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
function TodoList() {
  const [name, setName] = useState("");
  const [allData, setAllData] = useState([]);
  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState();

  const handleAdd = () => {
    if (name.length !== 0) {
      setAllData((newData) => [...newData, name]);
      setName("");
    }
  };

  const handleDelete = (index) => {
    allData.splice(index, 1);
    setAllData([...allData]);
  };

  const handleEdit = (i) => {
    setName(allData[i]);
    setShow(true);
    setEditIndex(i);
  };
  const handleUpdate = () => {
    allData.splice(editIndex, 1, name);
    setAllData([...allData]);
    setShow(false);
    setName("");
  };

  return (
    <div className="text-center">
      <h5>TODO LIST</h5>
      <input
        style={{ width: "350px" }}
        className="border-end-0 border-start-0 border-top-0"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {!show ? (
        <button className="bg-success border-0 rounded" onClick={handleAdd}>
          Add
        </button>
      ) : (
        <button className="bg-warning border-0 rounded" onClick={handleUpdate}>
          Update
        </button>
      )}

      {allData.map((val, i) => (
        <div className="card mx-auto my-5" style={{ width: "300px" }}>
          <p className="">{val}</p>
          <div className="d-flex">
            <button
              style={{ width: "150px" }}
              className="bg-info border-0 rounded"
              onClick={() => handleEdit(i)}
            >
              Edit
            </button>
            <button
              style={{ width: "150px" }}
              className="bg-danger border-0 rounded"
              onClick={() => handleDelete(i)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default TodoList;
