// routes/auth.js
import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import { verifyToken } from "../middleware/verifyToken.js"; // Middleware for protected routes

const router = express.Router();

/**
 * @route   POST /api/auth/register
 * @desc    Register new user (with employeeId)
 * @access  Public
 */
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, employeeId } = req.body;

    // Validate all fields
    if (!name || !email || !password || !employeeId) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ msg: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      employeeId,
    });

    res.status(201).json({ msg: "User registered", user });
  } catch (err) {
    console.error("REGISTER ERROR:", err); // Logs exact error in Render
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

/**
 * @route   POST /api/auth/login
 * @desc    Login user with email, password & employeeId
 * @access  Public
 */
router.post("/login", async (req, res) => {
  try {
    const { email, password, employeeId } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });

    // Validate employee ID
    if (user.employeeId !== employeeId) {
      return res
        .status(403)
        .json({ msg: "Access denied. Invalid employee ID." });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    // Generate JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (err) {
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

/**
 * @route   GET /api/auth/protected
 * @desc    Get current user (protected route)
 * @access  Private
 */
router.get("/protected", verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ msg: "User not found" });

    res.json(user);
  } catch (err) {
    console.error("PROTECTED ROUTE ERROR:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

export default router;
