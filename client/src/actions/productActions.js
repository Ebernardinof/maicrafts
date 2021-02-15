import {
  GET_PRODUCTS,
  ADD_PRODUCT,
  DELETE_PRODUCT,
  PRODUCTS_LOADING,
} from "../actions/types";

import api from "../apis/api";

export const getProducts = () => (dispatch) => {
  api
    .get("/api/products")
    .then((res) =>
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      })
    )
    .catch((err) => dispatch((err.res.data, err.res.status)));
};

export const addProduct = (products) => (dispatch, getState) => {
  api
    .post("/api/products", products)
    .then((res) =>
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      })
    )
    .catch((err) => dispatch((err.res.data, err.res.status)));
};

export const deleteProduct = (id) => (dispatch, getState) => {
  api
    .delete(`/api/products/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      })
    )
    .catch((err) => dispatch((err.response.data, err.response.status)));
};
