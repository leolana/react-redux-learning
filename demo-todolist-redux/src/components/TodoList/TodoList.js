import React, { Component } from "react";
import { connect } from "react-redux";

import TodoListItem from "../TodoListItem/TodoListItem";

import "./TodoList.css";

class TodoList extends Component {
  render() {
    const { todoItems } = this.props;

    const todoListItems =
      todoItems &&
      todoItems.map((item, index) => (
        <TodoListItem
          key={index}
          item={item}
          index={index}
        />
      ));

    return <ul className="list-group"> {todoListItems} </ul>;
  }
}

const mapStateToProps = state => {
  const { todoItems } = state;

  return {
    todoItems
  };
};

export default connect(mapStateToProps)(TodoList);
