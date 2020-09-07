import React from "react";
import { arrayOf, shape, string, bool, number, func } from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onTodoClick }) => {
  const todoList = todos.map((todo) => (
    <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
  ));
  return <ul className="list-group list-group-flush">{todoList}</ul>;
};

TodoList.propTypes = {
  todos: arrayOf(
    shape({
      text: string.isRequired,
      completed: bool.isRequired,
      id: number.isRequired,
    }).isRequired
  ),
  onTodoClick: func.isRequired,
};

export default TodoList;
