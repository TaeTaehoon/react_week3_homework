import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  todo: {
    id: 0,
    user: "",
    title: "",
    body: "",
  },
  isLoading: false,
  err: null,
};

export const __postTodo = createAsyncThunk(
  "todos/__postTodo",
  async (args, thunkAPI) => {
    try {
      const getList = await axios.get("http://localhost:3003/todos");
      const { user, title, body } = { ...args };
      const response = await axios.post("http://localhost:3003/todos", {
        id: getList.data.at(-1).id + 1,
        user,
        title,
        body,
      });
      console.log(response);
      return "ak";
    } catch (error) {
      console.log(error);
    }
  }
);

export const __getTodos = createAsyncThunk(
  "todos/__getTodos",
  async (args, thunkAPI) => {
    try {
      const getList = await axios.get("http://localhost:3003/todos");
      console.log(getList);
      return "ak";
    } catch (error) {
      console.log(error);
    }
  }
);

const todosSlice = createSlice({
  name: "todosSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__postTodo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__postTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.number = action.payload;
    },
    [__postTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
    //getTodos reducer start
    [__getTodos.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false;
      console.log(action.payload);
      state.number = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
  },
});

export default todosSlice.reducer;
