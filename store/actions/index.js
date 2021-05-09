import * as types from "./types";

export const getUserInfo = () => (dispatch) => {
  dispatch({
    type: types.GET_USER,
  });
};

export const scrapProducts = () => (dispatch) => {
  dispatch({
    type: types.SCRAP_PRODUCTS,
  });
};
