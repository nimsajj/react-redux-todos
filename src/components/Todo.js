import React from "react";
import { string, bool, func } from "prop-types";

const Todo = ({ text, completed, onClick }) => (
  <li
    key={text}
    onClick={onClick}
    style={{
      textDecoration: completed ? "line-through" : "none",
    }}
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
