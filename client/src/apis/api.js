import axios from "axios";

// var baseURL = "http://localhost:3000/api";
// if (process.env.NODE_ENV === "production") {
//   baseURL = "https://sheltered-sands-62756.herokuapp.com/api";
// }

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
