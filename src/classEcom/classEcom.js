import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import ClassBody from "./classEcom/classBody";
// import Validation from "../classEcom/validation";
// import Mobile from "./Form/mobile";
// import Laptop from "./Form/laptop";
// import Cart from "./Form/cart";
// import Header from "./Form/Header";

class App extends Component {
  constructor() {
    super();
    this.cart = [];
  }
  onAdd = (item) => {
    const productExist = cart.find((data) => data.id === item.id);
    if (productExist) {
      this.setCart(
        cart.map((data) =>
          data.id === item.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : data
        )
      );
    } else {
      this.setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  onDelete = (item) => {
    const productExist = cart.find((data) => data.id === item.id);
    if (productExist.quantity === 1) {
      this.setCart(cart.filter((data) => data.id !== item.id));
    } else {
      this.setCart(
        cart.map((data) =>
          data.id === item.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : data
        )
      );
    }
  };

  onRemove = (item) => {
    this.setCart(cart.filter((data) => data.id !== item.id));
  };
  onClear = () => {
    this.setCart([]);
  };
  render() {
    return (
      <div>
        <Routes>
          {/* <Route path="/" element={<Validation />} /> */}
          <Route path="/body" element={<ClassBody />} />
          {/* <Route path="/mobile" element={<Mobile />} />
          <Route path="/laptop" element={<Laptop />} />
          <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </div>
    );
  }
}
export default App;
