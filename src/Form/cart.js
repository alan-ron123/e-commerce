import React from "react";
import Header from "./Header";
import "./cart.css";
import { useState } from "react";

function Cart({ cart, onAdd, onDelete, onRemove, onClear, countCart }) {
  const totalPrice = cart.reduce(
    (price, product) => price + product.quantity * product.price,
    0
  );
  const [search, setSearch] = useState("");
  function handleSearch(event) {
    setSearch(event.target.value);
  }

  return (
    <>
      <Header searche={handleSearch} search={search} countCart={cart.length} />
      <div className="carts">
        <div className="border">
          <div className="cart-header">
            <h3>Cart Items</h3>
          </div>
          <div className="cart-empty">
            {cart.length === 0 && (
              <div className="cart-empty">cart is empty</div>
            )}
          </div>
          <div className="clear-button">
            {cart.length >= 1 && (
              <button className="clear-cart" onClick={onClear}>
                Clear Cart
              </button>
            )}
          </div>

          <div>
            {cart
              .filter((val) => {
                if (search === "") {
                  return val;
                } else if (val.name.toLowerCase().includes(search)) {
                  return val;
                }
              })
              .map((item) => (
                <div key={item.id} className="cart-list">
                  <img src={item.img} alt="" />

                  <div className="cart-name"> {item.name} </div>

                  <div className="cart-function">
                    <button className="cart-add" onClick={() => onAdd(item)}>
                      +
                    </button>
                    <button
                      className="cart-remove"
                      onClick={() => onDelete(item)}
                    >
                      -
                    </button>
                  </div>

                  <div className="cart-price">
                    {item.quantity}*{item.price}
                  </div>
                  <div className="cart-delete">
                    <button onClick={() => onRemove(item)}>Remove</button>
                  </div>
                </div>
              ))}
            <div className="total-price">
              <h3>Total Price</h3>
              <div className="cart-amount">${totalPrice}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
