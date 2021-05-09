import { ADD_LETTER } from "../actions/types";

const letterReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_LETTER:
      return payload;

    default:
      return state;
  }
};

export default letterReducer;
