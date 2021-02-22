import api from "../apis/api";

import { GET_ERRORS, LOGIN_USER, FETCH_USER, LOGOUT_USER } from "./types";
import createBrowserHistory from "../history";

//fetchUser
export const fetchUser = () => async (dispatch) => {
  const response = await api.get("/api/auth/current_user");
  dispatch({ type: FETCH_USER, payload: response.data });
};
export const logoutUser = () => async (dispatch) => {
  const response = await api.get("/api/auth/logout");
  dispatch({ type: LOGOUT_USER, payload: response.data });
};

// Register User
export const registerUser = (userData) => (dispatch) => {
  api
    .post("/api/auth/register", userData)
    .then((res) => createBrowserHistory.push("/login")) // re-direct to login on successful register
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

export const loginUser = (userData) => async (dispatch) => {
  api
    .post("/api/auth/login", userData)
    .then((response) => {
      console.log("AUTH ACTIONS > LOGIN_USER", response.data.user);
      localStorage.setItem("user", response.data);
      dispatch({ type: LOGIN_USER, payload: response.data });
      createBrowserHistory.push("/dashboard");
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
