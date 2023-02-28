import React from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </HashRouter>
  );
}
