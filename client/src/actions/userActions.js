import api from "../apis/api";

import { FETCH_USER } from "./types";

export const fetchUser = () => async (dispatch) => {
  const response = await api.get("/api/users/current_user");
  console.log("FETCH_USER PAYLOAD", response.data);
  dispatch({ type: FETCH_USER, payload: response.data });
};
// api.post("/api/auth/login", userData).then((response) => {
//       console.log("AUTH ACTIONS > LOGIN_USER", response.data);

//       // Save to localStorage
//       // Set token to localStorage
//       const { token } = response.data;
//       localStorage.setItem("jwtToken", token);
//       // // Set token to Auth header
//       setAuthToken(token);
//       // // Decode token to get user data
//       const decoded = jwt_decode(token);
//       // // Set current user
//       console.log(decoded);
//       response.send(decoded);
//       // dispatch(setCurrentUser(decoded));
//     });
// Login - get user token
