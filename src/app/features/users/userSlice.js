import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: []
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser, logOut } =
  userSlice.actions;

export default userSlice.reducer;
