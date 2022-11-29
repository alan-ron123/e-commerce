function Validat({ name, email, password }) {
  debugger;
  let errors = {};
  // const pattern = "123";
  // const RegEmail =
  //   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (name.length === 0) {
    errors.name = "*Enter name";
  } else if (name.length < 4) {
    errors.name = "*Enter valid name";
    console.log(errors);
  }

  if (email.length === 0) {
    errors.email = "*Email is required";
  } else if (email.length < 3) {
    errors.email = "Enter valid email";
  }

  if (password.length === 0) {
    errors.password = "*Password is Required";
  } else if (password.length < 9) {
    errors.password = "*Password must be more than 8 Characters";
  }
  return errors;
}

export default Validat;
