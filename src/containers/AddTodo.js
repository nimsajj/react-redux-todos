import React, { useRef } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  const input = useRef(null);

  return (
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
      <div class="input-group">
        <input
          ref={input}
          className="form-control"
          placeholder="Create a new task"
        />
        <button type="submit" className="btn btn-secondary ml-2">
          Add
        </button>
      </div>
    </form>
  );
};

export default connect()(AddTodo);
