import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

// import userReducer from "@/core/reducers/userSlice";

const store = configureStore({
  reducer: {
    // user: userReducer,
  },
});

export default store;
