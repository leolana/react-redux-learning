import React, { Component } from 'react';

import TodoListItem from './TodoListItem';

class TodoList extends Component {
    render () {
        const { items } = this.props;

        const todoListItems = items && items.map((item, index) => {
            <TodoListItem key={index} item={item} index={index} removeItem={this.props.removeItem} markTodoDone={this.props.markTodoDone} />
        });
        
        return (
            <ul className="list-group"> {todoListItems} </ul>
        );
    }
  }

export default TodoList;
