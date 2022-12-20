import React, { Component } from "react";
export default class ClassTodoList extends Component {
  constructor() {
    super();
    this.state = {
      todo_array: [],
      task: "",
      edit_task: "",
    };
  }

  onChangeTask = (e) => {
    this.setState({
      task: e.target.value,
    });
  };

  addTask = () => {
    let { todo_array, task } = this.state;
    let obj = {
      id:
        todo_array.length === 0 ? 1 : todo_array[todo_array.length - 1].id + 1,
      name: task,
    };
    todo_array.push(obj);
    this.setState({
      todo_array: todo_array,
      task: "",
    });
  };

  edit = (object) => {
    let { todo_array } = this.state;

    let i = todo_array.findIndex((task) => task.id === object.id);
    todo_array[i].is_editing = !todo_array[i].is_editing;

    todo_array.map((task) => {
      task.id !== object.id
        ? (task.is_editing = false)
        : (task.is_editing = task.is_editing);
      return task;
    });

    this.setState({
      todo_array: todo_array,
      edit_task: object.name,
    });
  };

  editTask = (task) => {
    this.setState({
      edit_task: task,
    });
  };

  saveEditTask = (object) => {
    let { todo_array, edit_task } = this.state;
    let i = todo_array.findIndex((task) => task.id === object.id);
    todo_array[i].name = edit_task;

    this.setState(
      {
        todo_array: todo_array,
        edit_task: "",
      },
      (e) => {
        this.edit(object);
      }
    );
  };

  delete = (object) => {
    let { todo_array } = this.state;
    let i = todo_array.findIndex((task) => task.id === object.id);
    todo_array.splice(i, 1);
    this.setState({
      todo_array: todo_array,
    });
  };

  done = (object) => {
    let { todo_array } = this.state;
    let i = todo_array.findIndex((task) => task.id === object.id);
    todo_array[i].is_done = true;
    this.setState({
      todo_array: todo_array,
    });
  };

  render() {
    return (
      <div>
        <div>
          <h2>ToDo List</h2>
        </div>

        <div>
          <input value={this.state.task} onChange={this.onChangeTask} />
          <button onClick={this.addTask}>Add</button>
        </div>

        <div>
          {this.state.todo_array.map((object, i) => {
            return (
              <tbody>
                <tr>
                  <td>
                    {object.is_editing ? (
                      <input
                        value={this.state.edit_task}
                        onChange={(e) => this.editTask(e.target.value)}
                      />
                    ) : object.is_done ? (
                      <s>{object.name}</s>
                    ) : (
                      <span>{object.name}</span>
                    )}
                  </td>
                  <td>
                    {object.is_editing ? (
                      <div>
                        <button
                          disabled={this.state.edit_task === ""}
                          onClick={(e) => this.saveEditTask(object)}
                        >
                          Save
                        </button>
                        <button onClick={(e) => this.edit(object)}>
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <div>
                        <button onClick={(e) => this.edit(object)}>Edit</button>
                        <button
                          // disabled={object.is_done}
                          onClick={(e) => this.done(object)}
                        >
                          Done
                        </button>
                        <button onClick={(e) => this.delete(object)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              </tbody>
            );
          })}
        </div>
      </div>
    );
  }
}
