import * as actionTypes from "./store/actions/types";
import axios from "axios";

export const setCoffeeShopsLoading = () => ({
  type: actionTypes.COFFEESHOPS_LOADING
});

export const getCoffeeShops = () => {
  return async dispatch => {
    try {
      dispatch(setCoffeeShopsLoading());
      const res = await axios.get("http://178.128.114.232/api/?format=json");
      const coffee = res.data;
      dispatch({ type: actionTypes.GET_COFFEESHOPS, payload: coffee });
    } catch (err) {
      console.error(err);
    }
  };
};
