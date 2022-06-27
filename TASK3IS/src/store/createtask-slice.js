import { createSlice } from "@reduxjs/toolkit";

const createTask = createSlice({
  name: "createTask",
  initialState: { task: [] },
  reducers: {
    addTask(state, actions) {
      const taskDetails = actions.payload;
      state.task.push(taskDetails);
      localStorage.setItem('keyObjects',state.task)
    },
    changeToDone(state, actions) {
      const id = actions.payload;
      let array = state.task
      array = array.filter((item) => item.idItem === id);
      array[0].type = "done";
    },
    changeToInProgress(state, actions) {
      const id = actions.payload;
      let array = state.task
      array = array.filter((item) => item.idItem === id);
      array[0].type = "inprogress";
    },
  },
});

export const createTaskActions = createTask.actions;

export default createTask;
