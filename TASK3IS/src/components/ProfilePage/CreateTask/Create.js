import { useRef } from "react";
import { useDispatch } from "react-redux";
import { createTaskActions } from "../../../store/createtask-slice";
import { mainPageActions } from "../../../store/mainpage-slice";
import Card from "../../UI/Card";
import "./Create.css";

const Create = () => {
  const dispatch = useDispatch();
  const title = useRef();
  const deadline = useRef();
  const textarea = useRef();
  const taskGivenTo = useRef();

  const shareTaskHandler = () => {
    dispatch(
      createTaskActions.addTask({
        title: title.current.value,
        deadline: deadline.current.value,
        textarea: textarea.current.value,
        taskGivenTo: taskGivenTo.current.value,
        type: "todo",
        idItem: title.current.value.substring(0, 2) + 1,
      })
    );
    dispatch(mainPageActions.exchangeRoute(true));
  };

  return (
    <Card>
      <div className="taskContainer2">
        <div className="taskHeader">
          <div className="title">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" placeholder="Title" ref={title} />
          </div>
          <div className="title">
            <label htmlFor="date">Deadline</label>
            <input type="date" id="date" placeholder="Date" ref={deadline} />
          </div>
        </div>
        <div className="textarea">
          <textarea
            ref={textarea}
            name="taskDescription"
            id="taskDescription"
            cols="0"
            rows="0"
          ></textarea>
        </div>
        <div className="btns">
          <div className="title">
            <label htmlFor="text">Task Given to</label>
            <input
              type="text"
              id="text"
              placeholder="Task Given to"
              ref={taskGivenTo}
            />
          </div>
          <button onClick={shareTaskHandler}>Share Task</button>
        </div>
      </div>
    </Card>
  );
};

export default Create;
