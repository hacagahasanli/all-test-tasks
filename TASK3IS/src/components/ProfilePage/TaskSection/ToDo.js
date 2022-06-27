import "./TaskLists.css";
import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { createTaskActions } from "../../../store/createtask-slice";

const ToDo = () => {
  const newTask = useSelector((state) => state.createTaskSlice.task);
  const todoNewTask = newTask.filter((task) => task.type === "todo");
  const dispatch = useDispatch()

  const forbidden = useSelector(
    (state) => state.forbiddenAdminSlice.forbiddenAdmin
  );
  const inProgressHandler = (id) => {
    dispatch(createTaskActions.changeToInProgress(id))
  };

  return (
    <Fragment>
      {todoNewTask.map((task) => (
        <div key={task.title.substring(0, 2) + 1} className="taskItem">
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
                defaultChecked={false}
                value="To Progress"
                onClick={(e) => inProgressHandler(task.idItem)}
              />}
            </footer>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default ToDo;
