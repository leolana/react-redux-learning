import React, { Component } from "react";
import { connect } from "react-redux";

import { markTodoDone, removeItem } from './../../actions/todoItem';

import "./TodoListItem.css";

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.onClickClose = this.onClickClose.bind(this);
    this.onClickDone = this.onClickDone.bind(this);
  }
  onClickClose() {
    const { dispatch } = this.props;

    var index = parseInt(this.props.index, 10);
    dispatch(removeItem(index));
  }
  onClickDone() {
    const { dispatch } = this.props;

    var index = parseInt(this.props.index, 10);
    dispatch(markTodoDone(index));
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

const mapStateToProps = state => {
  const { todoItems } = state;

  return {
    todoItems
  };
};

export default connect(mapStateToProps)(TodoListItem);
