import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { isAllowedEmployeeId } from "../models/User.js";

const router = express.Router();

/**
 * @route   POST /api/auth/register
 * @desc    Register user (admin or employee)
 */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, employeeId, role } = req.body;

    // ✅ Validate all fields
    if (!name || !email || !password || !employeeId || !role) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // ✅ Validate role
    const normalizedRole = role.toLowerCase();
    if (!["admin", "employee"].includes(normalizedRole)) {
      return res.status(400).json({ msg: "Role must be admin or employee" });
    }

    // ✅ Validate Employee ID
    if (!isAllowedEmployeeId(employeeId)) {
      return res.status(403).json({ msg: "Employee ID not allowed" });
    }

    // ✅ Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // ✅ Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create user
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      employeeId: employeeId.trim(),
      role: normalizedRole,
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
    console.error("REGISTER ERROR:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

/**
 * @route   POST /api/auth/login
 * @desc    Login user (admin or employee)
 */
router.post("/login", async (req, res) => {
  try {
    let { email, password, employeeId } = req.body;

    // ✅ Validate inputs
    if (!email || !password || !employeeId) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    email = email.toLowerCase().trim();
    employeeId = employeeId.trim();

    // ✅ Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    // ✅ Check Employee ID
    if (user.employeeId !== employeeId) {
      return res.status(403).json({ msg: "Employee ID does not match" });
    }

    // ✅ Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid email or password" });
    }

    // ✅ Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

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
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

export default router;
