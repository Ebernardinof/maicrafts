import {
  LOGIN_USER,
  CREATE_USER,
  FETCH_USER,
  LOGOUT_USER,
} from "../actions/types";

const isEmpty = require("is-empty");

const initialState = {
  isSignedIn: false,
  firstName: "",
  lastName: "",
  email: "",
  picUrl: "",
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      console.log("LOGIN PAYLOAD USER", action.payload);
      return {
        ...state,
        isSignedIn: true,
        user: action.payload,
      };
    case CREATE_USER:
      console.log("CREATE_USER PAYLOAD USER", action.payload.user);

      return {
        ...state,
        isSignedIn: true,
        user: action.payload,
      };
    case FETCH_USER:
      console.log("FETCH_USER PAYLOAD USER", action.payload.user);
      if (action.payload._id) {
        return {
          ...state,
          isSignedIn: true,
          userId: action.payload._id,
        };
      }
      return false;
    case LOGOUT_USER:
      return {
        ...state,
        isSignedIn: false,
        user: null,
      };
    default:
      return state;
  }
}
