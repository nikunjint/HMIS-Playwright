// authSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { userLogin } from "./authActions";

const initialState = {
  loading: false,
  userInfo: null,
  userToken: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.userInfo = null;
      state.userToken = null;
      localStorage.removeItem("userToken");
    },
  },
  extraReducers: {
    // login user
    [userLogin.pending]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.userInfo = payload;
      state.userToken = payload?.data?.token;
      localStorage.setItem("userToken", payload?.data?.access_token);
    },
    [userLogin.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    // register user reducer...
  },
  prepare: (state) => {
    const userToken = localStorage.getItem("userToken");
    if (userToken) {
      state.userToken = userToken;
    }
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;
