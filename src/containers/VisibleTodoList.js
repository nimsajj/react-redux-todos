import { connect } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { toggleTodo, removeTodo } from "../features/todos/todosSlice";
import { VisibilityFilters } from "../features/filters/filtersSlice";

import TodoList from "../components/TodoList";

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

const selectTodos = (state) => state.todos;
const selectFilter = (state) => state.visibilityFilter;

const selectVisibleTodos = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case SHOW_ALL:
        return todos;
      case SHOW_COMPLETED:
        return todos.filter((t) => t.completed);
      case SHOW_ACTIVE:
        return todos.filter((t) => !t.completed);
      default:
        throw new Error("Unknown filter: " + filter);
    }
  }
);

const mapStateToProps = (state) => ({
  todos: selectVisibleTodos(state),
});

const mapDispatchToProps = { toggleTodo, removeTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
