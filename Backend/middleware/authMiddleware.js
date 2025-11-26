// middleware/authMiddleware.js
import jwt from "jsonwebtoken";

/**
 * Helper to extract token from Authorization header
 * @param {string} header - Authorization header value
 * @returns {string|null} - JWT token or null if not found
 */
function getTokenFromHeader(header) {
  if (!header) return null;
  const parts = header.split(" ");
  if (parts.length === 2 && parts[0] === "Bearer") {
    return parts[1];
  }
  return null;
}

/**
 * Middleware to protect routes for authenticated users (Employee or Admin)
 */
export function requireAuth(req, res, next) {
  try {
    const token = getTokenFromHeader(req.headers.authorization);

    if (!token) {
      return res.status(401).json({ success: false, message: "Unauthorized: Token missing" });
    }

    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Attach decoded user info to req
    next();
  } catch (err) {
    console.error("requireAuth error:", err);
    return res.status(401).json({ success: false, message: "Unauthorized: Invalid token" });
  }
}

/**
 * Middleware to protect routes for Admin only
 * Must run after requireAuth
 */
export function requireAdmin(req, res, next) {
  try {
    if (!req.user) {
      return res.status(401).json({ success: false, message: "Unauthorized: User not authenticated" });
    }

    if (req.user.role !== "admin") {
      return res.status(403).json({ success: false, message: "Forbidden: Admin access only" });
    }

    next();
  } catch (err) {
    console.error("requireAdmin error:", err);
    return res.status(403).json({ success: false, message: "Forbidden: Admin access only" });
  }
}
