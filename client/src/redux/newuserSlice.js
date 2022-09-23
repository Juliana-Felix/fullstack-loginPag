import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  createdUser: null,
  loading: false,
  error: false,
}

export const newuserSlice = createSlice({
  name: 'newuser',
  initialState,
  reducers: {
    signupStart: (state) => {
      state.loading = true;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.createdUser = action.payload;
    },
    signupFailure: (state) => {
      state.loading = false;
      state.error = true;
    }
  }
})

export const { signupFailure, signupStart, signupSuccess } = newuserSlice.actions;

export default newuserSlice.reducer;