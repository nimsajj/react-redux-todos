import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectVisibleTodos,
  fetchTodos,
  toggleTodo,
  removeTodo,
} from "./todosSlice";

import Todo from "./Todo";

const TodoList = () => {
  //console.log("todo list : ", todos);

  const dispatch = useDispatch();

  const todos = useSelector(selectVisibleTodos);
  const todosStatus = useSelector((state) => state.todos.status);
  const todosError = useSelector((state) => state.todos.error);

  useEffect(() => {
    if (todosStatus === "idle") {
      dispatch(fetchTodos());
    }
  }, [todosStatus, dispatch]);

  switch (todosStatus) {
    case "loading":
      return "Loading ...";
    case "succeeded":
      const todoList = todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          onCompleted={() => toggleTodo(todo.id)}
          onRemoveTodo={() => removeTodo(todo.id)}
        />
      ));
      return <ul className="list-group list-group-flush">{todoList}</ul>;
    case "failed":
      return "Error : " + todosError;
    default:
      return null;
  }
};

export default TodoList;
