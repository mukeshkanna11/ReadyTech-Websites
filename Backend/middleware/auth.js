import jwt from "jsonwebtoken";
import User from "../models/User.js";

// ✅ Middleware to verify JWT token
export const protect = async (req, res, next) => {
  try {
    let token;

    // Check for Bearer token in headers
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select("-password");

    if (!req.user) {
      return res.status(404).json({ msg: "User not found" });
    }

    next();
  } catch (err) {
    console.error("AUTH ERROR:", err.message);
    res.status(401).json({ msg: "Token is not valid" });
  }
};

// ✅ Middleware to allow only admin users
export const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  } else {
    res.status(403).json({ msg: "Access denied: Admins only" });
  }
};
