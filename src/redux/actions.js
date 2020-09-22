
import axios from 'axios';
import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL
} from "./constants";

export const getUsersPendingAction = () => ({
  type: GET_USERS
});

export const getUsersSuccessAction = data => ({

  type: GET_USERS_SUCCESS,
  payload: data
});

export const getUsersFailAction = error => ({
  type: GET_USERS_FAIL,
  payload: error
});

export const getUsersAction = () => {
  return dispatch => {
    try {
      dispatch(getUsersPendingAction());
      return fetch("http://ec2-54-169-237-154.ap-southeast-1.compute.amazonaws.com/api/v1/users?limit=10&offset=0", {
        method: "GET",
        // headers: {
        //   "x-api-key": "a9c5327b-18d2-42c0-9fda-059dac6ecb65"
        // }
      })
        .then(res => res.json())
        .then(data => dispatch(getUsersSuccessAction(data)));
    } catch (error) {
      dispatch(getUsersFailAction(error));
    }
  };
};

export function loginAction(values) {
    return axios.post('http://ec2-54-169-237-154.ap-southeast-1.compute.amazonaws.com/api/v1/auth/login', values)
      .then(function (response) {
        localStorage.setItem("access token",response.data.token);
       return response.data;
      })
      .catch(function (error) {
       console.log(error);
      });  
};

