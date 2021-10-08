import axios from "axios";
import {
  FETCH_DATA_FAILURE,
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
} from "../constants/types";

export const fetchDataRequest = () => {
  return {
    type: FETCH_DATA_REQUEST,
  };
};

export const fetchDataSuccess = (apiData) => {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: apiData,
  };
};

export const fetchDataFailure = (error) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload: error,
  };
};

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest);
    axios
      .get("https://api.spacexdata.com/v3/launches")
      .then((response) => {
        const apiData = response.data;
        dispatch(fetchDataSuccess(apiData));
      })
      .catch((error) => {
        const erroMessage = error.message;
        dispatch(fetchDataFailure(erroMessage));
      });
  };
};
