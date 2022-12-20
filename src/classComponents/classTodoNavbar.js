import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
export default class classTodoNavbar extends Component {
  render() {
    return (
      <nav class="navbar bg-light">
        <div class="container">
          <p class="navbar-brand mb-0 h1">ToDo List</p>
        </div>
      </nav>
    );
  }
}
