import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    formValid: true,
    totalSubmit: true,
    username: "",
    isLogin: true,
  },
  reducers: {
    isValid(state, action) {
      const validObject = action.payload;
      let formTotalValid =
        validObject.usernameIsInValid &&
        validObject.passwordIsInValid &&
        validObject.emailIsInvalid &&
        validObject.addressIsInvalid &&
        validObject.phoneIsInvalid &&
        validObject.orgnameIsInvalid;
      state.formValid = !formTotalValid;
    },
    totallySubmitForm(state, action) {
      const submitBtn = action.payload;
      state.totalSubmit = submitBtn;
    },
    logout(state) {
      state.totalSubmit = true;
      state.username = localStorage.removeItem("key");
      localStorage.removeItem('admin');
      window.location.reload();
    },
    addToStorage(state, action) {
      const data = action.payload;
      state.username = localStorage.setItem("key", data);
    },
    typeLogin(state, action) {
      const value = action.payload;
      state.isLogin = value;
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice;
