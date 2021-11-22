import "./App.css";

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import CentrePage from "./pages/CentrePage";
import ProductPage from "./pages/ProductPage";
import AccountPage from "./pages/AccountPage";
import Cart from "./components/Cart/Cart";

function App() {
  const [isModalVisible, setModalVisisble] = useState(false);

  const closeCartHandler = () => {
    setModalVisisble(false);
  };

  const openCartHandler = () => {
    setModalVisisble(true);
  };

  return (
    <Layout openCart={openCartHandler}>
      <Routes>
        <Route path="/" exact element={<CentrePage />}></Route>
        <Route path="/account" element={<AccountPage />}></Route>
        {/* <Route path="/products" element={<ProductPage />}></Route> */}
        <Route path="/products" element={<ProductPage />}></Route>
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
