import "./App.css";

import React, { useState, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Layout from "./components/layout/Layout";
import CentrePage from "./pages/CentrePage";
import ProductPage from "./pages/ProductPage";
import AccountPage from "./pages/AccountPage";
import LoginPage from "./pages/LoginPage";
import RitualPage from "./pages/RitualPage";
import Cart from "./components/Cart/Cart";

import AuthContext from "./store/auth-context";

function App() {
  const [isModalVisible, setModalVisisble] = useState(false);
  const authCtx = useContext(AuthContext);

  const closeCartHandler = () => {
    setModalVisisble(false);
  };

  const openCartHandler = () => {
    setModalVisisble(true);
  };

  const PrivateOutlet = (page) => {
    return authCtx.isLoggedIn ? page : <Navigate to="/" />;
    /* {authCtx.isLoggedIn && <CentrePage />} */
    /* {!authCtx.isLoggedIn && <Navigate to="/" />} */
  };

  return (
    <Layout openCart={openCartHandler}>
      <Routes>
        <Route path="/" exact element={<LoginPage />}></Route>
        <Route path="/centres" element={PrivateOutlet(<CentrePage />)}></Route>
        <Route path="/rituals" element={PrivateOutlet(<RitualPage />)}></Route>
        <Route path="/account" element={PrivateOutlet(<AccountPage />)}></Route>
        <Route
          path="/products"
          element={PrivateOutlet(<ProductPage />)}
        ></Route>
        {<Route path="*" element={<Navigate to="/" />}></Route>}
      </Routes>
      {isModalVisible && <Cart onClose={closeCartHandler} />}
    </Layout>
  );

  // return (
  //   <React.Fragment>
  //     <MainNavigationbar />
  //     <CentrePage />;
  //   </React.Fragment>
  // );
}

export default App;
