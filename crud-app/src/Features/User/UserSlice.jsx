import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
    addUser: (state, action) => {
      //   console.log(action);
      state.push(action.payload);
    },
    edituser: (state, action) => {
      const { id, name, email } = action.payload;
      const existingUser = state.find((user) => user.id === id);

      if (existingUser) {
        existingUser.name = name;
        existingUser.email = email;
      }
    },
    deleteuser: (state, action) => {
      const { id } = action.payload;
      const existingUser = state.find((user) => user.id === id);
      if (existingUser) {
        return state.filter((user) => user.id !== id);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUser, edituser, deleteuser } = userSlice.actions;
export default userSlice.reducer;
