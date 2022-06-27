import useInputForm from "../../hooks/use-inputform";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../store/form-slice";
import { Fragment} from "react";
import Login from "./Login";
import "./OrgForm.css";

const OrgForm = (props) => {
  const {
    value: username,
    valueIsInValid: usernameIsInValid,
    errorChecker: usernameTotalInValid,
    blurHandler: usernameErrorHandler,
    enteredValueHandler: usernameInputHandler,
  } = useInputForm((value) => value.length > 6);

  const {
    value: password,
    valueIsInValid: passwordIsInValid,
    errorChecker: passwordTotalInValid,
    blurHandler: passwordErrorHandler,
    enteredValueHandler: passwordInputHandler,
  } = useInputForm((value) => value.length > 6);

  const {
    value: email,
    valueIsInValid: emailIsInvalid,
    errorChecker: emailTotalInValid,
    blurHandler: emailErrorHandler,
    enteredValueHandler: emailInputHandler,
  } = useInputForm((value) => {
    if (value.includes("@")) {
      if (value.indexOf("@") < value.length - 1) {
        return true;
      }
    }
  });

  const {
    value: orgname,
    valueIsInValid: orgnameIsInvalid,
    errorChecker: orgnameTotalInValid,
    blurHandler: orgnameErrorHandler,
    enteredValueHandler: orgnameInputHandler,
  } = useInputForm((value) => value.length > 3);

  const {
    value: phone,
    valueIsInValid: phoneIsInvalid,
    errorChecker: phoneTotalInValid,
    blurHandler: phoneErrorHandler,
    enteredValueHandler: phoneInputHandler,
  } = useInputForm((value) => {
    if (value.length === 10) {
      value = value.split("");
      for (let i = 0; i < value.length; i++) {
        let a = parseInt(value[i]);
        if (isNaN(a)) {
          return false;
        }
      }
      return true;
    }
  });

  const {
    value: address,
    valueIsInValid: addressIsInvalid,
    errorChecker: addressTotalInValid,
    blurHandler: addressErrorHandler,
    enteredValueHandler: addressInputHandler,
  } = useInputForm((value) => value.length > 10);


  const dispatch = useDispatch();

  dispatch(
    formActions.isValid({
      usernameIsInValid: usernameIsInValid,
      passwordIsInValid: passwordIsInValid,
      emailIsInvalid: emailIsInvalid,
      addressIsInvalid: addressIsInvalid,
      phoneIsInvalid: phoneIsInvalid,
      orgnameIsInvalid: orgnameIsInvalid,
    })
  );

  const formValid = useSelector((state) => state.form.formValid);
  const isLogin = useSelector((state) => state.form.isLogin);

  // const submitHandler = () => {
  //   dispatch(formActions.totallySubmitForm(false));
  // };

  const loginHandler = (e) =>{
    e.preventDefault();
    dispatch(formActions.typeLogin(false));
  }

  const formSubmissionHandler = (e) => {
    e.preventDefault();
    if (
      !passwordIsInValid ||
      !usernameIsInValid ||
      !emailIsInvalid ||
      !orgnameIsInvalid ||
      !phoneIsInvalid ||
      !addressIsInvalid
    ) {
      return;
    }

    dispatch(formActions.totallySubmitForm(false));

    dispatch(formActions.addToStorage(username));
  };

  const usernameValidClass = usernameTotalInValid
    ? "form-control invalid"
    : "form-control";

  const passwordValidClass = passwordIsInValid
    ? "form-control invalid"
    : "form-control";

  const emailValidClass = emailTotalInValid
    ? "form-control invalid"
    : "form-control";

  const addressValidClass = addressTotalInValid
    ? "form-control invalid"
    : "form-control";

  const phoneValidClass = phoneTotalInValid
    ? "form-control invalid"
    : "form-control";

  const orgnameValidClass = orgnameTotalInValid
    ? "form-control invalid"
    : "form-control";

  return (
    <Fragment>
      {isLogin ? (
        <form onSubmit={formSubmissionHandler}>
          <div className="control-group">
            <div className={usernameValidClass}>
              <label htmlFor="name">Username</label>
              <input
                type="text"
                id="name"
                onChange={usernameInputHandler}
                onBlur={usernameErrorHandler}
                value={username}
              />
              <p className="error-text">
                {usernameTotalInValid && "Please fill the input box"}
              </p>
            </div>
            <div className={emailValidClass}>
              <label htmlFor="email">E-Mail Address</label>
              <input
                type="email"
                id="email"
                placeholder="test@gmail.com"
                onChange={emailInputHandler}
                onBlur={emailErrorHandler}
                value={email}
              />
              <p className="error-text">
                {emailTotalInValid && "Please fill the input box"}
              </p>
            </div>
            <div className={passwordValidClass}>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={passwordInputHandler}
                onBlur={passwordErrorHandler}
                value={password}
              />
              <p className="error-text">
                {passwordTotalInValid && "Please fill the input box"}
              </p>
            </div>
            <div className={orgnameValidClass}>
              <label htmlFor="orgname">Organization Name</label>
              <input
                type="text"
                id="orgname"
                onChange={orgnameInputHandler}
                onBlur={orgnameErrorHandler}
                value={orgname}
              />
              <p className="error-text">
                {orgnameTotalInValid && "Please fill the input box"}
              </p>
            </div>
            <div className={phoneValidClass}>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="text"
                id="phone"
                placeholder="0559226762"
                onChange={phoneInputHandler}
                onBlur={phoneErrorHandler}
                value={phone}
              />
              <p className="error-text">
                {phoneTotalInValid && "Please fill the input box"}
              </p>
            </div>
            <div className={addressValidClass}>
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                onChange={addressInputHandler}
                onBlur={addressErrorHandler}
                value={address}
              />
              <p className="error-text">
                {addressTotalInValid && "Please fill the input box"}
              </p>
            </div>
          </div>
          <div className="form-actions">
            <button onClick={loginHandler}>Signin as an User</button>
            <button disabled={formValid}>Sign Up</button>
          </div>
        </form>
      ) : (
        <Login />
      )}
    </Fragment>
  );
};

export default OrgForm;
