import classes from "./Header.module.css";
import { useDispatch } from "react-redux";
import { formActions } from "../../../store/form-slice";
import { mainPageActions } from "../../../store/mainpage-slice";

const Header = (props) => {
  const dispatch = useDispatch();
  const checkType = localStorage.getItem("admin");

  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(formActions.logout());
  };

  const routeToCreateTask = (e) => {
    e.preventDefault();
    dispatch(mainPageActions.exchangeRoute(false))
  };

  const routeToBackMain = (e) => {
    e.preventDefault();
    dispatch(mainPageActions.exchangeRoute(true))
  }

  return (
    <header className={classes.header}>
      <h1>Profile</h1>
      <nav>
        <ul>
          {checkType && (
            <li>
              <a href="/" onClick={routeToCreateTask}>
                Create Task
              </a>
            </li>
          )}
          <li>
            <a href="/" onClick={routeToBackMain}>Task Lists</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
