import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allIds: [],
  byIds: {},
};

let nextTodoId = 0;

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const id = ++nextTodoId;
      state.allIds.push(id);

      state.byIds[id] = {
        content: action.payload,
        completed: false,
      };
    },

    toggleCompleteness: (state, { payload }) => {
      const { id } = payload;

      const targetTodo = state.byIds[id];

      targetTodo.completed = !targetTodo.completed;
    },

    removeTask: (state, { payload }) => {
      const { id } = payload;
      
      delete state.byIds[id]; 
      
      state.allIds = state.allIds.filter(todoId => todoId !== id);
    },
  },
});


export const { addTodo, toggleCompleteness, removeTask } = todoSlice.actions;

export default todoSlice.reducer;
