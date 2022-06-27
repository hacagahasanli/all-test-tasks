import OrgForm from "./components/Form/OrgForm";
import LandingPage from "./components/ProfilePage/LandingPage/LandingPage";
import { Fragment } from "react";
import { useSelector } from "react-redux";

function App() {
  let formValid = useSelector((state) => state.form.totalSubmit);
  let isAuth = useSelector((state) => state.loginSlice.isAuthenticated);

  const item = localStorage.getItem("key");
  console.log(item);
  if (item) {
    formValid = false;
    isAuth = false;
  } else {
    formValid = true;
    isAuth = true;
  }

  return (
    <Fragment>
      <div className="app">
        {formValid && isAuth && <OrgForm />}
        {(!formValid || !isAuth) && <LandingPage />}
      </div>
    </Fragment>
  );
}

export default App;
