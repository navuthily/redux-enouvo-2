import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL
} from "./constants";

const initialState = {
  users: [],
  loading: false
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true
      };
    case GET_USERS_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        loading: false,
        users: action.payload.results
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default rootReducer;
