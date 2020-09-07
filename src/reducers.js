import { combineReducers } from "redux";

import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  SET_VISIBILITY_FILTER,
  VisibilityFilters,
} from "./actions";

const { SHOW_ALL } = VisibilityFilters;

function filterReducer(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, { id: action.id, text: action.text, completed: false }];
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    default:
      return state;
  }
}

export default combineReducers({
  visibilityFilter: filterReducer,
  todos: todoReducer,
});
