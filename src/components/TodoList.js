import React from "react";
import { arrayOf, shape, string, bool, number, func } from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
  const todoList = todos.map((todo) => (
    <Todo
      key={todo.id}
      {...todo}
      onCompleted={() => onToggleTodo(todo.id)}
      onRemoveTodo={() => onRemoveTodo(todo.id)}
    />
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
  onToggleTodo: func.isRequired,
  onRemoveTodo: func.isRequired,
};

export default TodoList;
