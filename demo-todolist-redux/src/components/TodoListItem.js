import React, { Component } from "react";

import "./TodoListItem.css";

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    var index = parseInt(this.props.index, 10);
    this.props.removeItem(index);
  }
  onClickDone() {
    var index = parseInt(this.props.index, 10);
    this.props.markTodoDone(index);
  }
  render() {
    var todoClass = this.props.item.done ? "done" : "undone";
    return (
      <li className="list-group-item ">
        <div className={todoClass}>
          <span
            className="ll-icon ll-icon-ok icon"
            aria-hidden="true"
            onClick={this.onClickDone}
          />
          {this.props.item.value}
          <button type="button" className="close" onClick={this.onClickClose}>
            &times;
          </button>
        </div>
      </li>
    );
  }
}

export default TodoListItem;
