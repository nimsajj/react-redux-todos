import React from "react";
import { arrayOf, shape, string, bool, number, func } from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo, removeTodo }) => {
  const todoList = todos.map((todo) => (
    <Todo
      key={todo.id}
      {...todo}
      onCompleted={() => toggleTodo(todo.id)}
      onRemoveTodo={() => removeTodo(todo.id)}
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
  toggleTodo: func.isRequired,
  removeTodo: func.isRequired,
};

export default TodoList;
