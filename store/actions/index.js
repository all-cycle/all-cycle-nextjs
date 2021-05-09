import * as types from "./types";

export const getUserInfo = () => (dispatch) => {
  dispatch({
    type: types.GET_USER,
  });
};

export const addLetter = (letter) => (dispatch) => {
  dispatch({
    type: types.ADD_LETTER,
    payload: letter,
  });
};
