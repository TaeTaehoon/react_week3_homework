import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const PORT = "3003";
const initialState = {
  comments: [],
  comment: {
    id: 1,
    user: "1",
    comment: "ㄷㄷ",
  },
  isLoading: false,
  err: null,
};

export const __postComment = createAsyncThunk(
  "todos/__postComment",
  async (args, thunkAPI) => {
    try {
      const { pickedId, err } = { ...args };

      console.log(err);
      if (err === 404) {
        const targetId = pickedId;
        const { user, comment } = { ...args.inputs };
        const comments = {
          id: targetId,
          comments: [
            {
              id: 0,
              user,
              comment,
            },
          ],
        };
        const response = await axios.post(
          `http://localhost:${PORT}/comment`,
          comments
        );
        return thunkAPI.fulfillWithValue(response.data);
      } else {
        const commentList = await axios.get(
          `http://localhost:${PORT}/comment/${pickedId}`
        );
        const { user, comment } = { ...args.inputs };
        const comments = {
          id: pickedId,
          comments: [
            ...commentList?.data.comments,
            {
              id: commentList.data.comments?.at(-1).id + 1,
              user,
              comment,
            },
          ],
        };

        axios.post(`http://localhost:${PORT}/comment`, comments);
        const response = await axios.patch(
          `http://localhost:${PORT}/comment/${pickedId}`,
          comments
        );
        return thunkAPI.fulfillWithValue(response.data.comments?.at(-1));
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

export const __getComments = createAsyncThunk(
  "todos/__getComments",
  async (args, thunkAPI) => {
    try {
      const targetId = args;
      const response = await axios.get(
        `http://localhost:${PORT}/comment/${targetId}`
      );
      return thunkAPI.fulfillWithValue(response.data.comments);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.status);
    }
  }
);

const commentsSlice = createSlice({
  name: "commentsSlice",
  initialState,
  reducers: {},
  extraReducers: {
    [__postComment.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__postComment.fulfilled]: (state, action) => {
      state.isLoading = false;
      if (state.err === 404) {
        state.comments.push(...action.payload.comments);
      } else {
        state.comments.push(action.payload);
      }

      state.err = null;
    },
    [__postComment.rejected]: (state, action) => {
      state.isLoading = false;
      state.err = action.payload;
    },
    // __getComments reducer start
    [__getComments.pending]: (state, action) => {
      state.isLoading = true;
    },
    [__getComments.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.err = null;
      state.comments = action.payload;
    },
    [__getComments.rejected]: (state, action) => {
      state.isLoading = false;
      state.comments = [];
      state.err = action.payload;
    },
  },
});

export default commentsSlice.reducer;
