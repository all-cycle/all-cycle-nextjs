import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import fetchData from "@/core/api/fetchData";

export const getUserByToken = createAsyncThunk(
  "user/getUserByToken",
  async () => {
    const response = await fetchData("GET", "/user");

    return response;
  },
);

const initialState = {
  data: null,
  error: null,
  status: "idle",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // updateError: (state, action) => {
    //   state.status = "idle";
    //   state.error = action.error.message;
    // },
  },
  extraReducers: {
    [getUserByToken.pending]: (state) => {
      if (state.status === "idle") {
        state.status = "pending";
      }
    },
    [getUserByToken.fulfilled]: (state, action) => {
      if (state.status === "pending") {
        state.status = "idle";
        state.data = action.payload ?? null;
      }
    },
    [getUserByToken.rejected]: (state, action) => {
      if (state.status === "pending") {
        state.status = "idle";
        state.error = action.error.message;
      }
    },
  },
});

// export const { updateError } = userSlice.actions;

export default userSlice.reducer;

// export const userSelector = (state) => state.user.data;
// export const userIdSelector = (state) => state.user.data?._id || null;
// export const userNameSelector = (state) => state.user.data.name;
