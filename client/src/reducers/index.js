import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productsReducer";
import errorReducer from "./errorReducer";

export default combineReducers({
  auth: authReducer,
  products: productReducer,
  errors: errorReducer,
});
