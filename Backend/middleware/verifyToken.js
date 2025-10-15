// middleware/verifyToken.js
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const verifyToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) 
    return res.status(401).json({ msg: "No token provided" });

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;

    // Fetch user from DB
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ msg: "User not found" });

    // ✅ Only allow emails from readytechsolutions
    if (!user.email.endsWith("@readytechsolutions.com")) {
      return res.status(403).json({ msg: "Access denied. Invalid email domain" });
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (err) {
    console.error("TOKEN VERIFICATION ERROR:", err);
    res.status(403).json({ msg: "Invalid token" });
  }
};
