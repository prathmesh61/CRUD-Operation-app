import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./Features/User/UserSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});
