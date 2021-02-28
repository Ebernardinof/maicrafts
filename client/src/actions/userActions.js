import api from "../apis/api";

import {
  FETCH_USER_PROFILE,
  EDIT_USER_PROFILE,
  EDIT_USER_PROFILE_ERROR,
} from "./types";

import createBrowserHistory from "../history";

export const fetchUserProfile = () => async (dispatch) => {
  const response = await api.get("/api/users/profile");
  console.log("dispatching again", response.data);
  dispatch({ type: FETCH_USER_PROFILE, payload: response.data });
};
export const editUserProfile = (userData) => async (dispatch) => {
  //.patch() update only the keys changed and keep the othero nes, put() replaces the whole object with the new keys
  console.log("editProfile", userData);
  try {
    // const { data } = await axios.get('http://foo.bar/')
    const response = await api.patch("/api/users/profile", userData);
    console.log("editProfile res ", response);
    dispatch({ type: EDIT_USER_PROFILE, payload: response.data });
    // createBrowserHistory.push("/profile");
  } catch (error) {
    dispatch({
      type: EDIT_USER_PROFILE_ERROR,
      payload: error.response.data.message,
    });
    console.log("ERROR", error.response.data.message);
  }
};
