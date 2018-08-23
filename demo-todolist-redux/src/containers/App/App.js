import React, { Component } from "react";

import TodoHeader from "../../components/TodoHeader/TodoHeader";
import TodoList from "../../components/TodoList/TodoList";
import TodoForm from "../../components/TodoForm/TodoForm";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
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
          <TodoList />
          <TodoForm />
        </div>
      </div>
    );
  }
}

export default App;
