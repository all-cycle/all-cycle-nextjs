import { GET_USER } from "../actions/types";

const initialUser = {
  name: "hi",
};

const userReducer = (state = initialUser, { type }) => {
  switch (type) {
    case GET_USER:
      return { name: "who" };

    default:
      return state;
  }
};

export default userReducer;
