// ========================================================
// 🚀 ReadyTech Backend Server — Express v5 (Fixed Wildcard Error)
// ========================================================

import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";

// ---------------------- Import Routes ----------------------
import authRoutes from "./routes/auth.js";
import protectedRoutes from "./routes/protected.js";
import subscribeRoutes from "./routes/subscribe.js";
import contactRoutes from "./routes/contact.js";
import employeeRoutes from "./routes/employees.js";
import taskRoutes from "./routes/tasks.js";
import attendanceRoutes from "./routes/attendance.js";
import workRoutes from "./routes/workRoutes.js";

// ========================================================
// 🌍 Environment Setup
// ========================================================
dotenv.config();
const app = express();

// ========================================================
// 🧩 Middlewares
// ========================================================
app.use(helmet());
app.use(express.json({ limit: "10mb" }));
app.use(compression());
if (process.env.NODE_ENV !== "test") app.use(morgan("dev"));

// ========================================================
// 🌐 CORS Config (Express 5 Compatible)
// ========================================================
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://readytech-site.netlify.app",
  "https://readytech-websites.onrender.com",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
      console.warn(`🚫 Blocked by CORS: ${origin}`);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Fix: Use app.use() instead of app.options("/*")
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }
  next();
});

// ========================================================
// 🩺 Health Check
// ========================================================
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "✅ ReadyTech Backend is live!",
    environment: process.env.NODE_ENV || "development",
  });
});

// ========================================================
// 📦 Routes
// ========================================================
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/subscribe", subscribeRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/work", workRoutes);

// ========================================================
// 💾 MongoDB Connection
// ========================================================
const connectDB = async () => {
  console.log("⏳ Connecting to MongoDB...");
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    process.exit(1);
  }
};

// ========================================================
// 🧱 Error + 404 Handling
// ========================================================
app.use((err, req, res, next) => {
  console.error("💥 GLOBAL ERROR:", err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
});

// ========================================================
// 🚀 Start Server
// ========================================================
const PORT = process.env.PORT || 5000;
const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
};
startServer();

export default app;
