import React, { Component } from "react";
import { connect } from "react-redux";

import { addItem } from './../../actions/todoItem';

import "./TodoForm.css";

class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    this.refs.itemName.focus();
  }
  onSubmit(event) {
    event.preventDefault();

    const { dispatch, todoItems } = this.props;
    var newItemValue = this.refs.itemName.value;
    
    if(newItemValue) {
      dispatch(addItem({newItemValue}, todoItems.length + 1));
      this.refs.form.reset();
    }
  }
  render () {
    return (
      <form ref="form" onSubmit={this.onSubmit} className="form-inline">
        <input type="text" ref="itemName" className="form-control" placeholder="add a new todo..."/>
        <button type="submit" className="btn btn-default">Add</button> 
      </form>
    );   
  }
}

const mapStateToProps = state => {
  const { todoItems } = state;

  return {
    todoItems
  };
};

export default connect(mapStateToProps)(TodoForm);
