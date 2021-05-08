import * as types from "./types";

export const getUserInfo = () => (dispatch) =>
  dispatch({
    type: types.GET_USER,
  });
