import React from "react";
import { string, bool } from "prop-types";
import DeleteIcon from "../../assets/icons/Delete";
import { toggleTodo, removeTodo } from "./todosSlice";
import { useDispatch } from "react-redux";

const getStyle = (completed) => ({
  textDecoration: completed ? "line-through" : "none",
  color: completed ? "red" : "black",
});

const Todo = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  const onToogleTodo = () => {
    dispatch(toggleTodo(id));
  };

  const onRemoveTodo = () => {
    dispatch(removeTodo(id));
  };

  return (
    <>
      <li
        key={text}
        className="list-group-item d-flex justify-content-between align-items-center"
        style={getStyle(completed)}
      >
        <div>
          <input
            type="checkbox"
            aria-label="checked"
            onClick={onToogleTodo}
          ></input>
          <span className="ml-3">{text}</span>
        </div>

        <button
          type="button"
          className="btn btn-sm btn-danger"
          onClick={onRemoveTodo}
        >
          <DeleteIcon />
        </button>
      </li>
    </>
  );
};

Todo.propTypes = {
  text: string.isRequired,
  completed: bool.isRequired,
};

export default Todo;
