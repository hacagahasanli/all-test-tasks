import "./TaskLists.css";
import { Fragment } from "react";
import { useSelector} from "react-redux";

const Done = () => {
  const newTask = useSelector((state) => state.createTaskSlice.task);
  const todoNewTask = newTask.filter(
    (task) => task.type === "done"
  );

  return (
    <Fragment>
      {todoNewTask.map((task) => (
        <div key={task.idItem} className="taskItem">
          <div className="taskDetails">
            <p>{task.textarea}</p>
            <div className="taskName">{task.title}</div>
            <footer>
              <h6>
                DEADLINE <span>{task.deadline}</span>
              </h6>
              <h6>{task.taskGivenTo}</h6>
            </footer>
          </div>
        </div>
      ))}
    </Fragment>
  );
};
export default Done;
