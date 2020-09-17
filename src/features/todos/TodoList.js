import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectVisibleTodos, fetchTodos } from "./todosSlice";

import Todo from "./Todo";

const TodoList = () => {
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
      const todoList = todos.map((todo) => <Todo key={todo.id} {...todo} />);
      return <ul className="list-group list-group-flush">{todoList}</ul>;
    case "failed":
      return "Error : " + todosError;
    default:
      return null;
  }
};

export default TodoList;
