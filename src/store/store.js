import { configureStore } from '@reduxjs/toolkit';
import todoSlicer from "../store/slices/todo";

export const store = configureStore({
  reducer: {
    todo: todoSlicer,
  },
});
