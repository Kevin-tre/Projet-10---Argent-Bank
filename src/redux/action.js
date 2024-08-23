import axios from "axios";
import {
  loginUserFailed,
  loginUserRequest,
  loginUserSuccess,
  logoutUser,
} from "./reducer";

export const loginUser = (body, dispatch) => {
  dispatch(loginUserRequest());
  axios
    .post("http://localhost:3001/api/v1/user/login", body)
    .then((res) => {
      if (body.rememberMe) {
        localStorage.setItem("token", res.data.body.token);
      }
      getUser(res.data.body.token, dispatch);
    })
    .catch((err) => {
      dispatch(loginUserFailed());
    });
};

export const getUser = (token, dispatch) => {
  dispatch(loginUserRequest());
  axios
    .post("http://localhost:3001/api/v1/user/profile", null, {
      headers: { Authorization: "Bearer " + token },
    })
    .then((res) => {
      dispatch(loginUserSuccess({ user: res.data.body, token }));
    })
    .catch((err) => {
      dispatch(loginUserFailed());
    });
};

export const logoutUserAction = (dispatch) => {
  dispatch(logoutUser());
};
