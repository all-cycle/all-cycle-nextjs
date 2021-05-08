import { combineReducers } from "redux";
import * as types from "./types";

const initialUser = {
  user: { name: "hi" },
};

const userReducer = (state = initialUser, { type }) => {
  switch (type) {
    case types.GET_USER:
      return { name: "who" };

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  // review: reviewReducer,
});

export default rootReducer;
