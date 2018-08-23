import * as types from "./../constants/ActionTypes";

const initialState = [
  { index: 1, value: "Aprender react", done: false },
  { index: 2, value: "Ir a farmácia", done: true },
  { index: 3, value: "Comprar comida para o cachorro", done: true }
];

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return [...state, action.item];
    case types.REMOVE_ITEM:
      state.splice(action.itemIndex, 1);
      return [...state];
    case types.MARK_TODO_DONE:
      let todo = state[action.itemIndex];
      state.splice(action.itemIndex, 1);
      todo.done = !todo.done;
      todo.done ? state.push(todo) : state.unshift(todo);
      return [...state];
    default:
      return state;
  }
};
