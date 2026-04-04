import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./utils/protected";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <ProtectedRoute>
        <Route path="/dashboard/*" element={<Home />} />
        </ProtectedRoute>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
