// ---------------------- Imports ----------------------
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";
import contactRoutes from "./routes/contact.js"; // handles contact + subscribe
import protectedRoutes from "./routes/protected.js";

// ---------------------- Config ------------------------
dotenv.config();
const app = express();

// ---------------------- CORS Setup --------------------
const allowedOrigins = [
  "http://localhost:5173", // Vite dev
  "http://localhost:5174",
  "https://readytech-site.netlify.app", // Production frontend
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // allow Postman / curl
      if (allowedOrigins.includes(origin)) return callback(null, true);
      console.warn(`🚫 CORS blocked request from: ${origin}`);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json()); // Parse JSON

// ---------------------- Health Check ------------------
app.get("/", (req, res) => {
  res.status(200).send("🚀 ReadyTech Backend is running and healthy!");
});

// ---------------------- Routes ------------------------
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes); // includes /subscribe
app.use("/api/protected", protectedRoutes);

// ---------------------- MongoDB Connection ----------------------
const connectDB = async () => {
  console.log("⏳ Connecting to MongoDB...");

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 20000, // 20s timeout for Render cold start
    });

    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);

    // Detailed debug
    if (err.reason) console.error("📋 Reason:", err.reason);

    console.error(`
================= MONGO CONNECTION FAILED =================
💡 Tips:
1️⃣ Make sure MONGO_URI in Render Environment Variables is correct
2️⃣ Password is URL-encoded if it contains special characters (@, /, etc.)
3️⃣ MongoDB Atlas → Network Access includes 0.0.0.0/0 or Render's outbound IPs
===========================================================
    `);

    // Keep server running so it can return structured error responses
  }
};

connectDB();

// ---------------------- Debug Middleware ----------------------
app.use((req, res, next) => {
  console.log(`📨 ${req.method} ${req.originalUrl}`);
  next();
});

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
app.listen(PORT, () => {
  console.log(`🚀 Server running at: http://localhost:${PORT}`);
});

export default app;
