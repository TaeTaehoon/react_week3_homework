import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const PORT = "3003";
const initialState = {
  todos: [],
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
      const getList = await axios.get(`http://localhost:${PORT}/todos`);
      const { user, title, body } = { ...args };
      const response = await axios.post(`http://localhost:${PORT}/todos`, {
        id: getList.data?.at(-1)?.id + 1,
        user,
        title,
        body,
      });

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getTodos = createAsyncThunk(
  "todos/__getTodos",
  async (args, thunkAPI) => {
    try {
      const getList = await axios.get(`http://localhost:${PORT}/todos`);
      return thunkAPI.fulfillWithValue(getList.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
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
      state.todo = action.payload;
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

      state.todos = action.payload;
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
  },
});

export default todosSlice.reducer;
