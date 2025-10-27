import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home.jsx";
import EmployeeForm from "./components/EmployeeForm.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/home" element={<Home />} />
        <Route path="/employee-form" element={<EmployeeForm />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

