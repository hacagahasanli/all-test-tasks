import "./TaskLists.css";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTaskActions } from "../../../store/createtask-slice";

const InProgress = () => {
  const newTask = useSelector((state) => state.createTaskSlice.task);
  const forbidden = useSelector((state) => state.forbiddenAdminSlice.forbiddenAdmin)
  const dispatch = useDispatch();
  
  const todoNewTask = newTask.filter(
    (task) => task.type === "inprogress"
  );
  const doneHandler = (id) => {
    dispatch(createTaskActions.changeToDone(id));
  };

  return (
    <Fragment>
      {todoNewTask.map((task) => (
        <div key={task.idItem} className="taskItem">
          <div className="taskDetails">
            <p>{task.textarea}</p>
            <div className="taskName">{task.title}</div>
            <div className="footer">
              <h6>
                DEADLINE <span>{task.deadline}</span>
              </h6>
              <h6>{task.taskGivenTo}</h6>
            </div>
            <footer>
              {forbidden && <input
                type="button"
                value="TO DONE"
                onClick={(e) => doneHandler(task.idItem)}
              />}
            </footer>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default InProgress;
