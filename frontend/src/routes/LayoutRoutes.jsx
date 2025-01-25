// LayoutRoutes.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage";
import AllProductsList from "../components/AllProducts/AllProducts";
import AdminLayoutRoutes from "./AdminLayoutRoutes";

function LayoutRoutes() {
  return (
    <Router>
      <Routes>
        {/* User Side Routes */}
        <Route path="/" element={<MainPage />} />
        <Route path="/all-products" element={<AllProductsList />} />

        {/* Admin Side Routes */}
        <Route path="/admin/*" element={<AdminLayoutRoutes />} />
      </Routes>
    </Router>
  );
}

export default LayoutRoutes;
