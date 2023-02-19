import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appData",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state, payload) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state, payload) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleMenu, closeMenu } = appSlice.actions;
export default appSlice.reducer;
