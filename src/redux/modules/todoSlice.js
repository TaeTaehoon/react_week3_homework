import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const PORT = "3003";
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

export const __deleteTodo = createAsyncThunk(
  "todo/__deleteTodo",
  async (args, thunkAPI) => {
    try {
      const response = await axios.delete(
        `http://localhost:${PORT}/todos/${args}`
      );
      axios.delete(`http://localhost:${PORT}/comment/${args}`);
      console.log(response);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __getTodo = createAsyncThunk(
  "todo/__getTodo",
  async (args, thunkAPI) => {
    try {
      const response = await axios.get(
        `http://localhost:${PORT}/todos/${args}`
      );

      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __patchTodo = createAsyncThunk(
  "todo/__patchTodo",
  async (args, thunkAPI) => {
    try {
      const targetId = args.pickedId;
      const newBody = { body: args.newBody };
      const getTodo = await axios.patch(
        `http://localhost:${PORT}/todos/${targetId}`,
        newBody
      );
      console.log(getTodo);
      return thunkAPI.fulfillWithValue(getTodo.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__getTodo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    },
    [__getTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
    //patchTodo reducer start
    [__patchTodo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__patchTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.todo = action.payload;
    },
    [__patchTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
    //deleteTodo reducer start
    [__deleteTodo.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__deleteTodo.fulfilled]: (state, action) => {
      state.isLoading = false;
      // state.todo = action.payload;
    },
    [__deleteTodo.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
  },
});

export default todoSlice.reducer;
