import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { allowedEmployeeIds } from "../models/User.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

// -------------------- REGISTER --------------------
// routes/auth.js
router.post("/register", async (req, res) => {
  try {
    const { name, email, password, employeeId, role, department } = req.body;

    // Validate all required fields
    if (!name || !email || !password || !employeeId || !role) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    // Only allow admin or employee
    if (role !== "admin" && role !== "employee") {
      return res.status(400).json({ msg: "Invalid role. Must be 'admin' or 'employee'" });
    }

    // Only readytechsolutions email
    if (!email.endsWith("@readytechsolutions.com")) {
      return res.status(400).json({ msg: "Only readytechsolutions.com emails allowed" });
    }

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email: email.toLowerCase(),
      password: hashedPassword,
      employeeId: employeeId.trim(),
      role: role.toLowerCase(), // important
      department: department || "General",
    });

    res.status(201).json({
      msg: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        employeeId: user.employeeId,
        role: user.role,
        department: user.department,
      },
    });
  } catch (err) {
    console.error("REGISTER ERROR:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// -------------------- LOGIN --------------------
router.post("/login", async (req, res) => {
  try {
    let { email, password, employeeId } = req.body;

    if (!email || !password || !employeeId) {
      return res.status(400).json({ msg: "All fields are required" });
    }

    email = email.toLowerCase().trim();
    employeeId = employeeId.trim();

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Invalid email or password" });

    if (user.employeeId !== employeeId) {
      return res.status(403).json({ msg: "Access denied. Employee ID does not match" });
    }

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
    console.error("LOGIN ERROR:", err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
});

// -------------------- PROTECTED --------------------
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
