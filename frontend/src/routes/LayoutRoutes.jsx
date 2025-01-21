import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";

function LayoutRoutes() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          {/* <Route path="/products" element={<Products/>}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default LayoutRoutes;
