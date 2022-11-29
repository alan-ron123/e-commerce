import React, { useState } from "react";

function Crud() {
  const [name, setName] = useState("");
  const [updateName, setUpdateName] = useState([]);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState();
  function handleChange(event) {
    setName(event.target.value);
  }

  function handleClick() {
    if (name.length !== 0) {
      setUpdateName((pre) => [...pre, name]);
    }
    setName("");
  }
  function handleDelete(del) {
    updateName.splice(del, 1);
    setUpdateName([...updateName]);
  }
  function handleEdit(ed) {
    setName(...updateName[ed]);
    setShow(true);
    setEdit(ed);
  }
  function handleUpdate() {
    setUpdateName.splice(edit, 1, name);
    setUpdateName([...updateName]);
    setShow(false);
  }
  return (
    <div>
      <input onChange={handleChange} value={name} />
      {!show ? (
        <button onClick={handleClick}>add</button>
      ) : (
        <button onClick={handleUpdate}>update </button>
      )}
      {updateName.map((updatName) => (
        <div>
          <p>{updatName}</p>
          <button onClick={handleDelete}>delete</button>
          <button onClick={handleEdit}>edit </button>
        </div>
      ))}
    </div>
  );
}

export default Crud;
