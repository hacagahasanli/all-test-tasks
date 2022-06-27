import { Fragment } from "react";
import Header from "./Header.js";
import Card from "../../UI/Card";
import Main from "./Main";
import TaskList from "../TaskSection/TaskLists";
import { useSelector} from "react-redux";
import Create from "../CreateTask/Create";

const LandingPage = () => {
  let value = useSelector((state) => state.mainPageSlice.pageRoute);

  return (
    <Fragment>
      <Header />
      <Card>
        {value && (
          <div>
            <Main />
            <TaskList />
          </div>
        )}
        {!value && <Create />}
      </Card>
    </Fragment>
  );
};

export default LandingPage;
