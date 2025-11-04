// ========================================================
// 🚀 ReadyTech Backend Server — Enterprise Grade (Express v5 + Security + CORS)
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
import workRoutes from "./routes/work.js";

// ========================================================
// 🌍 Load Environment Variables
// ========================================================
dotenv.config();
const app = express();

// ========================================================
// 🧩 GLOBAL MIDDLEWARES
// ========================================================

// 🛡️ Secure HTTP Headers
app.use(helmet());

// 📦 Parse Incoming JSON Payloads
app.use(express.json({ limit: "10mb" }));

// ⚙️ GZIP Compression for Faster Responses
app.use(compression());

// 🪵 HTTP Request Logger (only in dev)
if (process.env.NODE_ENV !== "test") app.use(morgan("dev"));

// ========================================================
// 🌐 CONFIGURE CORS (Cross-Origin Resource Sharing)
// ========================================================
const allowedOrigins = [
  "http://localhost:5173", // Vite Frontend Dev
  "http://localhost:5174", // Alternate Dev Port
  "https://readytech-site.netlify.app", // Production Frontend
  "https://readytech-websites.onrender.com", // Backend URL
  process.env.FRONTEND_URL, // Optional Environment Variable
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.warn(`🚫 Blocked by CORS: ${origin}`);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// ✅ Handle Preflight Requests Globally (Express 5 Compatible)
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, PATCH, DELETE, OPTIONS"
    );
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    return res.sendStatus(204);
  }
  next();
});

// ========================================================
// 🩺 HEALTH CHECK ENDPOINT
// ========================================================
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "✅ ReadyTech Backend is running successfully!",
    environment: process.env.NODE_ENV || "development",
    timestamp: new Date().toISOString(),
  });
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
app.use("/api/work", workRoutes); // 👈 your admin panel route

// ========================================================
// 💾 DATABASE CONNECTION
// ========================================================
const connectDB = async () => {
  console.log("⏳ Connecting to MongoDB...");
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
    });
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB Connection Error:", err.message);
    console.error(`
================= MONGO CONNECTION FAILED =================
💡 Fix Tips:
1️⃣ Verify .env → MONGO_URI is valid
2️⃣ If using Atlas, whitelist 0.0.0.0/0 under Network Access
3️⃣ Encode special chars in password (@ → %40, etc)
===========================================================
`);
    process.exit(1);
  }
};

// ========================================================
// ⚙️ GLOBAL ERROR HANDLER
// ========================================================
app.use((err, req, res, next) => {
  console.error("💥 GLOBAL ERROR:", err.stack || err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

// ========================================================
// ❌ 404 Handler — Catch All Unmatched Routes
// ========================================================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Cannot ${req.method} ${req.originalUrl}`,
  });
});

// ========================================================
// 🚀 START SERVER
// ========================================================
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  await connectDB();

  const server = app.listen(PORT, "0.0.0.0", () => {
    console.log(
      `🚀 Server running on port ${PORT} [${process.env.NODE_ENV || "development"}]`
    );
  });

  // Graceful Shutdown
  const shutdown = (signal) => {
    console.log(`\n🛑 ${signal} received. Closing server...`);
    server.close(() => {
      console.log("💤 Server closed. Exiting process.");
      process.exit(0);
    });
  };

  ["SIGTERM", "SIGINT"].forEach((sig) => process.on(sig, () => shutdown(sig)));
};

startServer();

export default app;
