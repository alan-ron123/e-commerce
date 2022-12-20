import React, { useState } from "react";
import Read from "./read";
import axios from "axios";

export default function Create() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const postData = () => {
    axios.post(`https://6389a1a6c5356b25a20423f7.mockapi.io/crud`, {
      firstName,
      lastName,
    });
  };
  return (
    <div>
      <div>
        <label>First Name</label>
        <br />
        <input
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label>Last Name</label>
        <br />
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <button onClick={postData} type="submit">
          Submit
        </button>
      </div>
      <Read />
    </div>
  );
}
