import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function App() {
  return (
    <div style={{ padding: 20, fontFamily: "Arial" }}>
      <h1>👩‍💼 Employee Dashboard</h1>
      <nav>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/employee-form">Add Employee</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

