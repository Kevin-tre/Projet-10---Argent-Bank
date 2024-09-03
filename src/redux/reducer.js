import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    user: null,
    userLoading: false,
    error: "",
    updateUserLoading: false,
  },
  reducers: {
    loginUserRequest: (state) => {
      state.userLoading = true;
    },
    loginUserSuccess: (state, action) => {
      state.userLoading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.error = "";
    },
    loginUserFailed: (state) => {
      state.userLoading = false;
      state.error = "L'email ou le mot de passe est incorrect.";
    },
    updateUserRequest: (state) => {
      state.updateUserLoading = true;
    },
    updateUserSuccess: (state, action) => {
      state.updateUserLoading = false;
      state.error = "";
    },
    updateUserFailed: (state) => {
      state.updateUserLoading = false;
      state.error = "L'email ou le mot de passe est incorrect.";
    },
    logoutUser: (state) => {
      state.token = "";
      state.user = null;
      state.error = "";
    },
  },
});

export const {
  loginUserRequest,
  loginUserSuccess,
  loginUserFailed,
  updateUserRequest,
  updateUserSuccess,
  updateUserFailed,
  logoutUser,
} = userSlice.actions;

export default userSlice.reducer;
