import { createSlice } from "@reduxjs/toolkit";
import admin from "../mockdatas/adminstrators";
import users from "../mockdatas/users";

const initialState = {
  isAuthenticated: false,
  isAuthAdmin: false,
  isAuthUser: false,
  username: "",
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    isLogin(state, action) {
      const data = action.payload;
      for (let item of admin) {
        if (item.name === data.name || item.pass === data.pass) {
          localStorage.setItem('admin',true)
          state.isAuthenticated = true;
          state.isAuthAdmin = true;
        }
      }
      for(let user of users){
        if (user.name === data.name || user.password === data.pass) {
          state.isAuthenticated = true;
          state.isAuthUser = true;
        }
      }
    },
    setToStorage(state, action) {
      const data = action.payload;
      state.username = localStorage.setItem("key", data);
    },
  },
});

export default loginSlice;

export const loginAction = loginSlice.actions;
