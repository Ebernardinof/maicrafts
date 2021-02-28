import {
  LOGIN_USER,
  CREATE_USER,
  FETCH_USER,
  LOGOUT_USER,
  SIGNUP_ERROR,
  FETCH_USER_PROFILE,
  EDIT_USER_PROFILE_ERROR,
} from "../actions/types";

const initialState = {
  isSignedIn: false,
  userId: null,
  message: null,
  profile: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USER_PROFILE:
      if (action.payload._id) {
        console.log("REDUCE PROFILE >>> ", action.payload);
        return {
          ...state,
          profile: action.payload,
        };
      }
      return false;
    case EDIT_USER_PROFILE_ERROR:
      return { ...state, message: action.payload };
    case LOGIN_USER:
      console.log("LOGIN PAYLOAD USER", action.payload);
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload,
        rights: action.payload.rights,
        message: null,
      };
    case CREATE_USER:
      console.log("CREATE_USER PAYLOAD USER", action.payload);
      return {
        ...state,
        isSignedIn: true,
        userId: action.payload.userId,
        rights: action.payload.rights,
        message: null,
      };
    case FETCH_USER:
      console.log("FETCH_USER PAYLOAD USER", action.payload);
      if (action.payload._id) {
        return {
          ...state,
          isSignedIn: true,
          userId: action.payload._id,
          rights: action.payload.rights,
        };
      }
      return false;
    case LOGOUT_USER:
      return {
        ...state,
        isSignedIn: false,
        userId: null,
      };
    case SIGNUP_ERROR:
      return { ...state, isSignedIn: false, message: action.payload };
    default:
      return state;
  }
}
