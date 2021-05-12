import { combineReducers } from "redux";

import userReducer from "./user";
import letterReducer from "./letter";

const rootReducer = combineReducers({
  user: userReducer,
  letters: letterReducer,
  // review: reviewReducer,
});

export default rootReducer;
