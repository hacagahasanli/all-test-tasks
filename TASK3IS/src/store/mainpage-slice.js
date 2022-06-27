import { createSlice } from "@reduxjs/toolkit";

const mainPageSlice = createSlice({
  name: "MainPage",
  initialState: { pageRoute: true },
  reducers: {
    exchangeRoute(state, actions) {
      const exchange = actions.payload;
      state.pageRoute = exchange;
    },
  },
});

export const mainPageActions = mainPageSlice.actions;
export default mainPageSlice;
