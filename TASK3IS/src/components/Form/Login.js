import { useDispatch } from "react-redux";
import { loginAction } from "../../store/login-slice";
import { useRef } from "react";
import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const passRef = useRef();
  const formSubmissionHandler = (e) => {
    e.preventDefault();
    dispatch(
      loginAction.isLogin({
        name: nameRef.current.value,
        pass: passRef.current.value,
      })
    );
    dispatch(loginAction.setToStorage());
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group2">
        <div className="form-control2">
          <label htmlFor="name">Username</label>
          <input ref={nameRef} type="text" id="name" placeholder="Username" />
        </div>
        <div className="form-control2">
          <label htmlFor="password">Password</label>
          <input
            ref={passRef}
            type="password"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="form-actions2">
          <button>Login as User</button>
        </div>
      </div>
    </form>
  );
};
export default Login;
