import React from "react";

function Validate({ email, password }) {
  let errors = {};

  if (email === "") {
    errors.email = "*Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "*Invalid Email";
  }

  if (password === "") {
    errors.password = "*Password is Required";
  } else if (password.length < 7) {
    errors.password = "*Password must be more than 6 Characters";
  }

  return errors;
}

export default Validate;
// else if (name.length === Number.test(name)) {
//   errors.name = "Enter valid name";
// }
{
  /*
if (errors) {
  setErrors(Validat({ name, email, password }));
} else if (!errors) {
  navigate("/body");
}*/
}
{
  /* <div>
              <center>
                <img className="image1" src={vall.img} />
                <p className="nameItem">{vall.name}</p>
                <p className="color">PRICE:${vall.price}</p>
              </center>
            </div> */
}
