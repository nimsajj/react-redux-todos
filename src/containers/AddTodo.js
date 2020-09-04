import React, { useRef } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  const input = useRef(null);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let value = input.current.value.trim();

          if (!value) {
            return;
          }
          dispatch(addTodo(value));
          value = "";
        }}
      >
        <input ref={input} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
