import "./App.css";
import Topbar from "./components/Topbar";
import Todo from "./components/TodoItem";
import React, { Component } from "react";

export default class App extends Component {
  state = {
    todoList: [
      {
        title: "Work on Design Systems",
        completed: false,
        id: 1,
      },
    ],
  };
  render() {
    return (
      <div>
        <Topbar />
        {this.state.todoList.map((todo) => (
          <Todo key={todo.id} />
        ))}
      </div>
    );
  }
}
