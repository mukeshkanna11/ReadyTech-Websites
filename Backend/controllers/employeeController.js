// controllers/employeeController.js
import Employee from "../models/Employee.js";

// ✅ Get all employees
export const getEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (error) {
    next(error);
  }
};

// ✅ Add a new employee
export const addEmployee = async (req, res, next) => {
  try {
    const { name, email, role } = req.body;
    const newEmployee = new Employee({ name, email, role });
    await newEmployee.save();
    res.status(201).json({ message: "Employee added successfully", newEmployee });
  } catch (error) {
    next(error);
  }
};

// ✅ Update employee
export const updateEmployee = async (req, res, next) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedEmployee) return res.status(404).json({ message: "Employee not found" });
    res.status(200).json({ message: "Employee updated", updatedEmployee });
  } catch (error) {
    next(error);
  }
};

// ✅ Delete employee
export const deleteEmployee = async (req, res, next) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
    if (!deletedEmployee) return res.status(404).json({ message: "Employee not found" });
    res.status(200).json({ message: "Employee deleted" });
  } catch (error) {
    next(error);
  }
};
