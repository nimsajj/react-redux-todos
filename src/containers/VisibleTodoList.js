import { connect } from "react-redux";
import { VisibilityFilters } from "../actions";
import { toggleTodo, removeTodo } from "../features/todos/todosSlice";
import TodoList from "../components/TodoList";

const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;

const getVisiblityFilter = (todos, filter) => {
  switch (filter) {
    case SHOW_ALL:
      return todos;
    case SHOW_COMPLETED:
      return todos.filter((t) => t.completed);
    case SHOW_ACTIVE:
      return todos.filter((t) => !t.completed);
    default:
      return todos;
  }
};

const mapStateToProps = ({ todos, visibilityFilter }) => ({
  todos: getVisiblityFilter(todos, visibilityFilter),
});

const mapDispatchToProps = { toggleTodo, removeTodo };

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
