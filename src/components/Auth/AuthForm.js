import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./AuthForm.module.css";
import AuthContext from "../../store/auth-context";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const emailInput = emailInputRef.current.value;
    const passwordInput = passwordInputRef.current.value;
    let url = "";

    // Could add validations on email and password
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAMHzYM42z9cX4mySa4hO6dVCDBGRX17ow";
    } else {
      // signup logic
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAMHzYM42z9cX4mySa4hO6dVCDBGRX17ow";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailInput,
        password: passwordInput,
        returnSecureToken: true,
      }),
      header: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          // response is success
          // user and password saved at endpoints
          return res.json();
        } else {
          // if error then we can show here
          return res.json().then((data) => {
            setError("Authentication Failed");
            if (data && data.error && data.error.message) {
              // setError(data.error.message);
              throw new Error(data.error.message);
            }
          });
        }
      })
      .then((data) => {
        authCtx.login(data.idToken);
        navigate("/centres");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required ref={emailInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            required
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button onClick={submitHandler}>
              {isLogin ? "Login" : "Create Account"}
            </button>
          )}
          {isLoading && <p>Loading.....</p>}
          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
        <p className={classes.error}>{error}</p>
      </form>
    </section>
  );
};

export default AuthForm;
