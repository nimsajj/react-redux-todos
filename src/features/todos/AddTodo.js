import React, { useState } from "react";
import { unwrapResult } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addNewTodo } from "./todosSlice";

const AddTodo = () => {
  const [todoText, setTodoText] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const dispatch = useDispatch();
  const canSave = todoText.trim() && addRequestStatus === "idle";

  const onChange = (e) => setTodoText(e.target.value);

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          if (!canSave) {
            return;
          }
          try {
            setAddRequestStatus("pending");
            const resultAction = await dispatch(
              addNewTodo({ text: todoText, completed: false })
            );
            unwrapResult(resultAction);
          } catch (error) {
            console.error("Failed to save the post: ", error);
          } finally {
            setAddRequestStatus("idle");
            setTodoText("");
          }
        }}
      >
        <div className="input-group">
          <input
            value={todoText}
            onChange={onChange}
            className="form-control"
          />
          <button type="submit" className="btn btn-secondary ml-2">
            Add Todo
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
