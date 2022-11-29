import React from "react";
import { Route, Routes } from "react-router-dom";
import Body from "./Form/body";
import Validation from "./Form/validation";
import Mobile from "./Form/mobile";
import Laptop from "./Form/laptop";
import Cart from "./Form/cart";
import { useState } from "react";
import Header from "./Form/Header";

function App() {
  const [cart, setCart] = useState([]);

  const onAdd = (item) => {
    const productExist = cart.find((data) => data.id === item.id);
    if (productExist) {
      setCart(
        cart.map((data) =>
          data.id === item.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : data
        )
      );
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const onDelete = (item) => {
    const productExist = cart.find((data) => data.id === item.id);
    if (productExist.quantity === 1) {
      setCart(cart.filter((data) => data.id !== item.id));
    } else {
      setCart(
        cart.map((data) =>
          data.id === item.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : data
        )
      );
    }
  };

  const onRemove = (item) => {
    setCart(cart.filter((data) => data.id !== item.id));
  };
  const onClear = () => {
    setCart([]);
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Validation />} />
        <Route path="/body" element={<Body onAdd={onAdd} cart={cart} />} />
        <Route path="/mobile" element={<Mobile onAdd={onAdd} cart={cart} />} />
        <Route path="/laptop" element={<Laptop onAdd={onAdd} cart={cart} />} />
        <Route
          path="/cart"
          element={
            <Cart
              onAdd={onAdd}
              onDelete={onDelete}
              onRemove={onRemove}
              onClear={onClear}
              cart={cart}
            />
          }
        />
      </Routes>
    </div>
  );
}
export default App;
