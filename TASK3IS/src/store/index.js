import { configureStore } from "@reduxjs/toolkit";
import formSlice from "./form-slice";
import loginSlice from "./login-slice";
import mainPageSlice from "./mainpage-slice";
import createTaskSlice from "./createtask-slice";
import forbiddenAdminSlice from './forbiddenadmin-slice'

const store = configureStore({
  reducer: {
    form: formSlice.reducer,
    loginSlice: loginSlice.reducer,
    mainPageSlice: mainPageSlice.reducer,
    createTaskSlice: createTaskSlice.reducer,
    forbiddenAdminSlice: forbiddenAdminSlice.reducer

  },
});

export default store;
