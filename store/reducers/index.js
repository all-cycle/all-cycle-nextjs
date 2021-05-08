import { combineReducers } from "redux";

import userReducer from "./user";

const rootReducer = combineReducers({
  user: userReducer,
  // review: reviewReducer,
});

export default rootReducer;
