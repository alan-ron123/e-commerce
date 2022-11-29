import React from "react";
import { useState } from "react";
import Validat from "./Validat.js";
import "./Validation.css";
import images from "../logo/doodle.png";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Validation() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [show, setShow] = useState(false);

  function handleChange(event) {
    setName(event.target.value);
  }
  const [email, setEmail] = useState("");
  function handleChange2(event) {
    setEmail(event.target.value);
  }
  const [password, setPassword] = useState("");
  function handleChange3(event) {
    setPassword(event.target.value);
  }
  const [errors, setErrors] = useState({});

  function Validat({ name, email, password }) {
    debugger;
    let errors = {};

    if (name.length === 0) {
      errors.name = "*Enter name";
      setShow(false);
    }
    //  else if () {
    //   errors.name = "*Enter valid name";
    //   setShow(false);
    //   console.log(errors);
    // }
    else {
      setShow(true);
    }

    if (email.length === 0) {
      errors.email = "*Email is required";
      setShow(false);
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "*Enter valid email";
      setShow(false);
    } else {
      setShow(true);
    }

    if (password.length === 0) {
      errors.password = "*Password is Required";
      setShow(false);
    } else if (password.length < 9) {
      errors.password = "*Password must be more than 8 Characters";
      setShow(false);
    } else {
      setShow(true);
    }
    return errors;
  }

  function handleSubmit(event) {
    event.preventDefault();
    setErrors(Validat({ name, email, password }));
    if (show === true) {
      navigate("/body");
    }

    // if (name === "" || email === "" || password === "") {
    //   setErrors(Validat({ name, email, password }));
    // } else {
    //   navigate("/body");
    // }
  }

  //   if (!setErrors(Validat({ name, email, password }))) {
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }
  //   if (show === true) {
  //     navigate("/body");
  //   }
  // }
  // } else if (setErrors(Validat({ name, email, password })).length === 0) {
  //   setShow(true);
  // }

  // setErrors(Validat({ name, email, password }));

  return (
    <div className="container">
      <img src={images} alt="" />

      <div className="separate">
        <form>
          <label>Your Name</label>
          <br></br>
          <input
            onChange={handleChange}
            value={name}
            placeholder="Enter name"
            type="text"
          />
          <p>{errors.name}</p>
          <br></br>
          <label>G-mail</label>
          <br></br>
          <input
            onChange={handleChange2}
            value={email}
            placeholder="Enter email"
            type="gmail"
          />
          <p>{errors.email}</p>
          <br></br>

          <label>Password</label>
          <br></br>
          <input
            onChange={handleChange3}
            value={password}
            placeholder="your Password"
            type="password"
          />
          <p>{errors.password}</p>
          <br></br>

          <button className="btn" onClick={handleSubmit}>
            submit
          </button>
        </form>
      </div>
      {/* <Link to="/body"> 
        <h1>ALAN</h1>
  </Link>*/}
    </div>
  );
}

export default Validation;
