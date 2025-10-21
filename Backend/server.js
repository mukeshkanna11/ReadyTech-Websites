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
      serverSelectionTimeoutMS: 15000, // 15s timeout for better visibility
    });

    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);

    // Detailed debugging info
    if (err.reason) console.error("📋 Reason:", err.reason);

    // Friendly output for Render logs
    console.error(`
    `);

    // Don't kill the process — keep server running to respond with an error
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

  // Always send structured JSON for frontend clarity
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
