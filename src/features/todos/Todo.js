import React from "react";
import { string, bool, func } from "prop-types";
import DeleteIcon from "../../assets/icons/Delete";

const getStyle = (completed) => ({
  textDecoration: completed ? "line-through" : "none",
  color: completed ? "red" : "black",
});

const Todo = ({ text, completed, onCompleted, onRemoveTodo }) => (
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
          onClick={onCompleted}
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

Todo.propTypes = {
  text: string.isRequired,
  completed: bool.isRequired,
  onCompleted: func.isRequired,
  onRemoveTodo: func.isRequired,
};

export default Todo;
