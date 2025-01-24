
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AllProductsList from "../components/AllProducts/AllProducts";

function LayoutRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>

          <Route path="/all-products" element={<AllProductsList/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default LayoutRoutes;
