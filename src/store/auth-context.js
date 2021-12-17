import React, { useEffect, useState, useCallback } from "react";
import useHttp from "../hooks/use-http";

const AuthContext = React.createContext({
  token: "",
  email: "",
  data: {},
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const initialToken = localStorage.getItem("token");
  const initialEmail = localStorage.getItem("email");

  const [token, setToken] = useState(initialToken);
  const [email, setEmail] = useState(initialEmail);
  const [data, setData] = useState([]);

  const isLoggedIn = !!token;

  const loginHandler = (token, email) => {
    setToken(token);
    setEmail(email);
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
  };

  const logoutHandler = () => {
    setToken(null);
    setEmail(null);
    setData(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  // downloads all the user data if any
  const transformData = useCallback(
    (dataArray) => {
      let dataUser;
      // extracting the user who logged in from database
      for (let data of dataArray) {
        if (data.user?.email === email) {
          dataUser = data;
        }
      }
      // console.log(dataUser);
      // console.log(dataArray);
      setData(dataUser);
    },
    [email]
  );

  const { isLoading, error, sendRequest: fetchTasks } = useHttp(transformData);

  useEffect(() => {
    fetchTasks({
      url: "https://muse-self-care-default-rtdb.firebaseio.com/data.json",
    });
  }, [fetchTasks]);

  const contextValue = {
    token: token,
    email: email,
    data: data,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
