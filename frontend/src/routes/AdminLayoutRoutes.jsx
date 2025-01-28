// AdminLayoutRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import AdminDashboard from "../pages/Dashboard";

function AdminLayoutRoutes() {
  return (
    <Routes>
      <Route path="/dashboard" element={<AdminDashboard />} />
    </Routes>
  );
}

export default AdminLayoutRoutes;
