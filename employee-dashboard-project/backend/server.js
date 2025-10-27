import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Load employees from local JSON file
const getEmployees = () => {
  const data = fs.readFileSync(path.join(__dirname, "employees.json"), "utf8");
  return JSON.parse(data);
};

// GET: All employees
app.get("/api/employeelist", (req, res) => {
  res.json(getEmployees());
});

// POST: Add a new employee
app.post("/api/employees", (req, res) => {
  const employees = getEmployees();
  const newEmployee = { id: Date.now(), ...req.body };
  employees.push(newEmployee);
  fs.writeFileSync(path.join(__dirname, "employees.json"), JSON.stringify(employees, null, 2));
  res.status(201).json(newEmployee);
});

// Root route
app.get("/", (req, res) => {
  res.send("Employee Backend API is running. Use /api/employeelist.");
});

app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));

