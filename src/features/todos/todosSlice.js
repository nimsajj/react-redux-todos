import {
  createSlice,
  createAsyncThunk,
  createSelector,
  nanoid,
} from "@reduxjs/toolkit";
import { client } from "../../api/client";
import { VisibilityFilters } from "../filters/filtersSlice";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await client.get("/api/todos");
  return response.todos;
});

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: {
      reducer(state, action) {
        const { id, text } = action.payload;
        state.items.push({ id, text, completed: false });
      },
      prepare(text) {
        return { payload: { text, id: nanoid() } };
      },
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo(state, action) {
      state.splice(action.payload, 1);
    },
  },
  extraReducers: {
    [fetchTodos.pending]: (state, action) => {
      state.status = "loading";
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.items = state.items.concat(action.payload);
    },
    [fetchTodos.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    },
  },
});

export const { addTodo, toggleTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;

export const selectAllTodos = (state) => state.todos.items;
export const selectFilter = (state) => state.visibilityFilter;

export const selectVisibleTodos = createSelector(
  [selectAllTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter((t) => t.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter((t) => !t.completed);
      default:
        throw new Error("Unknown filter: " + filter);
    }
  }
);
