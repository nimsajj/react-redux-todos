import { combineReducers } from "redux";
import todosReducer from "features/todos/todosSlice";

import { SET_VISIBILITY_FILTER, VisibilityFilters } from "./actions";

const { SHOW_ALL } = VisibilityFilters;

function filterReducer(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default combineReducers({
  visibilityFilter: filterReducer,
  todos: todosReducer,
});
