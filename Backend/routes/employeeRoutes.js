import express from "express";
import Employee from "../models/Employee.js";

const router = express.Router();

// 🧾 Get all employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find().populate("workStatus");
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ➕ Add a new employee
router.post("/", async (req, res) => {
  try {
    const employee = new Employee(req.body);
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// 🔍 Get single employee by ID
router.get("/:employeeId", async (req, res) => {
  try {
    const emp = await Employee.findOne({ employeeId: req.params.employeeId }).populate("workStatus");
    if (!emp) return res.status(404).json({ message: "Employee not found" });
    res.json(emp);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
