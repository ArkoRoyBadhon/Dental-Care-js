import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
  },
  reducers: {
    setUser: (state, action) => {
      const userData = action.payload;
      state.user = userData;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser, logOut } = userSlice.actions;

export default userSlice.reducer;
// 64f0943b8dde822567505e31
