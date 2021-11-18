import "./App.css";

import React from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./components/layout/Layout";
import CentrePage from "./pages/CentrePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import AccountPage from "./pages/AccountPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<CentrePage />}></Route>
        <Route path="/account" element={<AccountPage />}></Route>
        <Route path="/products" element={<ProductPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
      </Routes>
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
