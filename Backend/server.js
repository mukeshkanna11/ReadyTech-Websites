// ========================================================
// 🚀 ReadyTech Backend Server — Production Version
// ========================================================

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// ---------------------- Import Routes ----------------------
import authRoutes from "./routes/auth.js";
import protectedRoutes from "./routes/protected.js";
import subscribeRoutes from "./routes/subscribe.js";
import contactRoutes from "./routes/contact.js";
import employeeRoutes from "./routes/employees.js";
import taskRoutes from "./routes/tasks.js";
import attendanceRoutes from "./routes/attendance.js";

// ---------------------- Config ----------------------
dotenv.config();
const app = express();

// ========================================================
// 🧩 MIDDLEWARE SETUP
// ========================================================

// ✅ Parse JSON
app.use(express.json());

// ✅ CORS (Allow specific frontends)
const allowedOrigins = [
  "http://localhost:5173", // Local dev (Vite)
  "http://localhost:5174",
  "https://readytech-site.netlify.app", // Production frontend
  process.env.FRONTEND_URL, // Optional (Render env)
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // Allow Postman / internal
      if (allowedOrigins.includes(origin)) return callback(null, true);
      console.warn(`🚫 CORS blocked request from: ${origin}`);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// ========================================================
// 🩺 HEALTH CHECK
// ========================================================
app.get("/", (req, res) => {
  res.status(200).send("✅ ReadyTech Backend is running successfully on Render!");
});

// ========================================================
// 📦 API ROUTES
// ========================================================
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/subscribe", subscribeRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/attendance", attendanceRoutes);

// ========================================================
// 💾 DATABASE CONNECTION (MongoDB)
// ========================================================
const connectDB = async () => {
  console.log("⏳ Connecting to MongoDB...");
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 60000,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    console.error(`
================= MONGO CONNECTION FAILED =================
💡 Tips:
1️⃣ Check MONGO_URI in Render Environment Variables
2️⃣ Encode special chars in password (@ → %40, / → %2F)
3️⃣ In MongoDB Atlas → Network Access → allow 0.0.0.0/0
===========================================================
    `);
    process.exit(1);
  }
};
connectDB();

// ========================================================
// ⚙️ GLOBAL ERROR HANDLER
// ========================================================
app.use((err, req, res, next) => {
  console.error("💥 GLOBAL ERROR:", err.stack || err);
  res.status(500).json({
    msg: "Internal Server Error",
    error: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

// ========================================================
// 🚀 SERVER LISTENER
// ========================================================
const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app;
