import api from "../apis/api";

import {
  SIGNUP_ERROR,
  LOGIN_USER,
  FETCH_USER,
  LOGOUT_USER,
  CREATE_USER,
} from "./types";

import createBrowserHistory from "../history";

//fetchUser
export const fetchUser = () => async (dispatch) => {
  const response = await api.get("/api/users/current_user");
  dispatch({ type: FETCH_USER, payload: response.data });
};
export const logoutUser = () => async (dispatch) => {
  const response = await api.get("/api/auth/logout");
  dispatch({ type: LOGOUT_USER, payload: response.data });
};

// Register User
export const registerUser = (userData) => async (dispatch) => {
  await api
    .post("/api/auth/register", userData)
    .then((response) => {
      dispatch({ type: CREATE_USER, payload: response.data });
      createBrowserHistory.push("/dashboard");
    }) // re-direct to login on successful register
    .catch((err) =>
      dispatch({
        type: SIGNUP_ERROR,
        payload: err.response.data.message,
      })
    );
};

export const loginUser = (userData) => async (dispatch) => {
  api
    .post("/api/auth/login", userData)
    .then((response) => {
      console.log("AUTH ACTIONS > LOGIN_USER", response.data.auth);
      dispatch({ type: LOGIN_USER, payload: response.data.auth });
      createBrowserHistory.push("/dashboard");
    })
    .catch((err) =>
      dispatch({
        type: SIGNUP_ERROR,
        payload: err.response.data.message,
      })
    );
};
