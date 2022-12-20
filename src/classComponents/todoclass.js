import React, { Component } from "react";
import ClassTodoCarosal from "./classComponents/classTodoCarosal";
import ClassTodoNavbar from "./classComponents/classTodoNavbar";
import ClassTodoList from "./classComponents/classTodoList";
export default class App extends Component {
  render() {
    return (
      <div>
        <ClassTodoNavbar />
        <ClassTodoCarosal />
        <ClassTodoList />
      </div>
    );
  }
}
