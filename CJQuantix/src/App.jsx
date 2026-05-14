import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout.jsx";

// Pages & Features
import Dashboard from "./pages/Dashboard.jsx";
import Manufacturing from "./features/manufacturing/Manufacturing.jsx";
import Orders from "./features/Orders.jsx";
import Inventory from "./features/inventory/Inventory.jsx";
import ActivityLog from "./features/inventory/ActivityLog.jsx";
import LoginPage from "./features/auth/LoginPage.jsx";
import RegistrationPage from "./features/auth/RegistrationPage.jsx";

const App = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegistrationPage />} />

      {/* Protected Dashboard Routes */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/orders" element={<Orders />} />

        {/* Inventory Routes */}
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/Activity-log" element={<ActivityLog />} />

        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Route>
    </Routes>
  );
};

export default App;
