// ========================================================
// ReadyTech Backend Server 🚀 (Render-Optimized)
// ========================================================

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// ---------------------- Routes ----------------------
import authRoutes from "./routes/auth.js";
import protectedRoutes from "./routes/protected.js";
import subscribeRoutes from "./routes/subscribe.js";
import contactRoutes from "./routes/contact.js"; // already done

// ---------------------- Config ----------------------
dotenv.config();
const app = express();

// ---------------------- Middleware ----------------------
app.use(express.json());

// ---------------------- CORS Setup ----------------------
const allowedOrigins = [
  "http://localhost:5173", // Vite dev
  "http://localhost:5174",
  "https://readytech-site.netlify.app", // Production frontend
  process.env.FRONTEND_URL, // Optional extra for Render env vars
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // Allow Postman / Render health checks
      if (allowedOrigins.includes(origin)) return callback(null, true);
      console.warn(`🚫 CORS blocked request from: ${origin}`);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// ---------------------- Health Check ----------------------
app.get("/", (req, res) => {
  res.status(200).send("✅ ReadyTech Backend is running and healthy on Render!");
});

// ---------------------- Routes ----------------------
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/subscribe", subscribeRoutes);
app.use("/api/contact", contactRoutes);

// ---------------------- MongoDB Connection ----------------------
const connectDB = async () => {
  console.log("⏳ Connecting to MongoDB...");

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 60000, // 60s timeout
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    console.error(`
================= MONGO CONNECTION FAILED =================
💡 Tips:
1️⃣ Check MONGO_URI in Render Environment Variables
2️⃣ Password must be URL-encoded if it includes @ or /
3️⃣ MongoDB Atlas → Network Access → allow 0.0.0.0/0
===========================================================
    `);
    process.exit(1);
  }
};

connectDB();

// ---------------------- Global Error Handler ----------------------
app.use((err, req, res, next) => {
  console.error("💥 GLOBAL ERROR HANDLER:", err.stack || err);
  res.status(500).json({
    msg: "Internal Server Error",
    error: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

// ---------------------- Server Listener ----------------------
const PORT = process.env.PORT || 5000;

// For Render health check compatibility
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});

export default app;
