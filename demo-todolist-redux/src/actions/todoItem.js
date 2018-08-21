import * as types from "./../constants/ActionTypes";

export const addItem = (todoItem, index) => {
  const item = {
    index,
    value: todoItem.newItemValue,
    done: false
  };

  return {
    type: types.ADD_ITEM,
    item
  };
};

export const removeItem = itemIndex => {
  return {
    type: types.REMOVE_ITEM,
    itemIndex
  };
};

export const markTodoDone = itemIndex => {
  return {
    type: types.MARK_TODO_DONE,
    itemIndex
  };
};
