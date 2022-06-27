import "./TaskLists.css";
import Done from "./Done";
import InProgress from "./InProgress";
import ToDo from "./ToDo";

const TaskList = () => {

  return (
    <div className="taskContainer">
      <div className="taskItems">
        <div className="taskPosition">TO DO</div>
        <ToDo />
      </div>
      <div className="taskItems">
        <div className="taskPosition">IN PROGRESS</div>
        <InProgress />
      </div>
      <div className="taskItems">
        <div className="taskPosition">DONE</div>
        <Done />
      </div>
    </div>
  );
};

export default TaskList;
