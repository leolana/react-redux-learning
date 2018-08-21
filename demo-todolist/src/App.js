import React, { Component } from "react";

import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import logo from "./logo.svg";
import "./App.css";

const todoItems = [
  { index: 1, value: "learn react", done: false },
  { index: 2, value: "Go shopping", done: true },
  { index: 3, value: "buy flowers", done: true }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
    this.state = { todoItems: todoItems };
  }

  addItem(todoItem) {
    todoItems.unshift({
      index: todoItems.length + 1,
      value: todoItem.newItemValue,
      done: false
    });
    this.setState({ todoItems: todoItems });
  }

  removeItem(itemIndex) {
    todoItems.splice(itemIndex, 1);
    this.setState({ todoItems: todoItems });
  }

  markTodoDone(itemIndex) {
    var todo = todoItems[itemIndex];
    todoItems.splice(itemIndex, 1);
    todo.done = !todo.done;
    todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
    this.setState({ todoItems: todoItems });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div id="main">
          <TodoHeader />
          <TodoList
            items={this.state.todoItems}
            removeItem={this.removeItem}
            markTodoDone={this.markTodoDone}
          />
          <TodoForm addItem={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;
