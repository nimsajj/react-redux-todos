import React from "react";
import { string, bool, func } from "prop-types";

const getStyle = (completed) => ({
  textDecoration: completed ? "line-through" : "none",
  color: completed ? "red" : "black",
});

const Todo = ({ text, completed, onClick }) => (
  <li
    key={text}
    onClick={onClick}
    className="list-group-item"
    style={getStyle(completed)}
  >
    {text}
  </li>
);

Todo.propTypes = {
  text: string.isRequired,
  completed: bool.isRequired,
  onClick: func.isRequired,
};

export default Todo;
