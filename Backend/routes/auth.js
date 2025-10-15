import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { allowedEmployeeIds } from "../models/User.js";

const router = express.Router();

/**
 * @route   POST /api/auth/register
 * @desc    Register user (admin or employee)
 */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, employeeId, role } = req.body;

    if (!name || !email || !password || !employeeId || !role) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Validate role
    if (!["admin", "employee"].includes(role.toLowerCase())) {
      return res.status(400).json({ msg: "Role must be admin or employee" });
    }

    // Check allowed employee IDs
    if (!allowedEmployeeIds.includes(employeeId)) {
      return res.status(403).json({ msg: "Employee ID not allowed" });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      employeeId,
      role: role.toLowerCase(),
    });

    res.status(201).json({
      msg: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        employeeId: user.employeeId,
        role: user.role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

/**
 * @route   POST /api/auth/login
 * @desc    Login user
 */
router.post("/login", async (req, res) => {
  try {
    let { email, password, employeeId } = req.body;

    if (!email || !password || !employeeId)
      return res.status(400).json({ msg: "All fields are required" });

    email = email.toLowerCase();
    employeeId = employeeId.trim();

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid email or password" });

    if (user.employeeId !== employeeId)
      return res.status(403).json({ msg: "Employee ID does not match" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid email or password" });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.status(200).json({
      msg: "Login successful",
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        employeeId: user.employeeId,
        role: user.role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

export default router;
