import React, { useState } from "react";
import Validate from "../component1/validate.js";

function Validation() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [datas, setDatas] = useState([]);

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validate({ email, password }));
    console.log(email, password);
    const data = { email, password };
    if (email && password) {
      setDatas((date) => [...date, data]);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <div className="wrap">
        <div className="input">
          <input
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder={"Enter your email..."}
            autoComplete="off"
          />{" "}
          <br></br>
          <p>{errors.email}</p>
          <input
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder={"Enter your password here..."}
          />{" "}
          <br></br>
          <p>{errors.password}</p>
          <button className="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        {datas.map((a) => (
          <>
            <h1>Email:{a.email}</h1>
            <h1>Password:{a.password}</h1>
          </>
        ))}
      </div>
    </div>
  );
}

export default Validation;
