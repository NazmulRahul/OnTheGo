import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import axios, { all } from 'axios';

const initialState = {
  users: [],
  status: 'pending',
  error: null,
};
const POST_URL = `https://jsonplaceholder.typicode.com/posts`;
export const postUsers = createAsyncThunk('auth/postUsers ', async () => {
  try {
    console.log('testing ');
    // const response = await axios.post(POST_URL);
    // console.log(response, 'success');
    // console.log('fetching posts');
    // return [...response.data];
  } catch (error) {
    return error.message;
  }
});
const userSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    addUser: {
      reducer: (state, action) => {
        state.users.push(action.payload);
      },
      prepare: (email, password) => {
        return { payload: { email, password } };
      },
    },
  },
  extraReducers(builder) {
    builder
      .addCase(postUsers.pending, (state, action) => {
        state.status = 'loading...';
      })
      .addCase(postUsers.fulfilled, (state, action) => {
        state.status = 'success';
      });
  },
});

export const status = (state) => state.auth.status;
export const allUsers = (state) => state.auth.users;
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
