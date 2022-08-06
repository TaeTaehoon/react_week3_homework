import { configureStore } from "@reduxjs/toolkit";
import commentSlice from "./modules/commentSlice";
import commentsSlice from "./modules/commentsSlice";
import todoSlice from "./modules/todoSlice";
import todosSlice from "./modules/todosSlice";

const store = configureStore({
  reducer: {
    commentSlice,
    commentsSlice,
    todoSlice,
    todosSlice,
  },
});

export default store;
