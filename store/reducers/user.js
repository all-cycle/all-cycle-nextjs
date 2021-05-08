import * as types from "../types";

const initialUser = {
  name: "hi",
};

const userReducer = (state = initialUser, { type }) => {
  switch (type) {
    case types.GET_USER:
      return { name: "who" };

    default:
      return state;
  }
}

export default userReducer;
