import { createSlice } from "@reduxjs/toolkit";


const forbiddenAdmin = createSlice({
    name: "createTask",
    initialState: { forbiddenAdmin: localStorage.getItem('admin')},
    reducers: {
        confirm(){
        }
    },
  });
  
  export const forbiddenAdminActions = forbiddenAdmin.actions;
  
  export default forbiddenAdmin;
  