// server.js — ReadyTech Backend (Fully Updated + Helpdesk Enabled)
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import compression from "compression";
import morgan from "morgan";
import path from "path";
import rateLimit from "express-rate-limit";
import { fileURLToPath } from "url";

// ======================= Route Imports =======================
import authRoutes from "./routes/auth.js";
import protectedRoutes from "./routes/protected.js";
import subscribeRoutes from "./routes/subscribe.js";
import contactRoutes from "./routes/contact.js";
import employeeRoutes from "./routes/employees.js";
import taskRoutes from "./routes/tasks.js";
import attendanceRoutes from "./routes/attendance.js";
import workRoutes from "./routes/workRoutes.js";
import ticketsRoutes from "./routes/ticketRoutes.js";  
import supportRoutes from "./routes/supportRoutes.js";

// ⬅️ ADD THIS (Your Helpdesk Chat Routes)
import helpdeskRoutes from "./routes/helpdeskRoutes.js";

// =============================================================
// Environment Setup
// =============================================================
dotenv.config();

const app = express();
app.set("trust proxy", 1);

console.log("=================================");
console.log("🚀 ENVIRONMENT CHECK");
console.log("NODE_ENV:", process.env.NODE_ENV);
console.log("MAIL_USER:", process.env.MAIL_USER);
console.log("MAIL_PASS EXISTS:", !!process.env.MAIL_PASS);
console.log("MAIL_FROM:", process.env.MAIL_FROM);
console.log("FRONTEND_URL:", process.env.FRONTEND_URL);
console.log("=================================");

// dirname fix for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// =============================================================
// Middlewares
// =============================================================
app.use(helmet());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true }));
app.use(compression());

if (process.env.NODE_ENV !== "test") {
  app.use(morgan("dev"));
}

// ========================== Rate Limiter ======================
const ticketLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 8,
  message: { error: "Too many requests. Try again in 1 minute." },
});

// =============================================================
// CORS Configuration
// =============================================================
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://readytech-site.netlify.app",
  "https://readytech-websites.onrender.com",
  "https://readytechsolutions.in",
  "https://www.readytechsolutions.in",
  process.env.FRONTEND_URL,
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true); // Postman or same-server requests
      if (allowedOrigins.includes(origin)) return callback(null, true);

      console.log("❌ CORS Blocked:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-API-KEY"],
  })
);

// Allows mobile apps / Postman
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", req.headers.origin || "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

// =============================================================
// Health Check
// =============================================================
app.get("/", (req, res) =>
  res.json({
    success: true,
    message: "ReadyTech Backend is Live!",
    time: new Date().toISOString(),
  })
);

// =============================================================
// API Routes
// =============================================================
app.use("/api/auth", authRoutes);
app.use("/api/protected", protectedRoutes);
app.use("/api/subscribe", subscribeRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/work", workRoutes);

// ===================== SUPPORT / HELP DESK ====================

// Employee creates ticket (chatbot)
app.use("/api/tickets", ticketLimiter, ticketsRoutes);

// Admin + Employee support chat
app.use("/api/support", supportRoutes);

// ⬅️ NEW (Your Chat Helpdesk System)
app.use("/api/helpdesk", helpdeskRoutes);
// 404 Handler
// =============================================================
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
});

// =============================================================
// Global Error Handler
// =============================================================
app.use((err, req, res, next) => {
  console.error("🔥 GLOBAL ERROR:", err.message);

  if (err.message.includes("CORS")) {
    return res.status(403).json({ success: false, message: err.message });
  }

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// =============================================================
// Database + Server Start
// =============================================================
const PORT = process.env.PORT || 5000;

const connectDB = async () => {
  try {
    console.log("⏳ Connecting to MongoDB...");
    const conn = await mongoose.connect(
  process.env.MONGO_URI,
  {
    serverSelectionTimeoutMS: 15000,
  }
);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌ MongoDB Error:", err.message);
    process.exit(1);
  }
};

const startServer = async () => {
  await connectDB();
  const server = app.listen(PORT, () =>
    console.log(`🚀 Server running on port ${PORT}`)
  );

  process.on("SIGINT", async () => {
    console.log("🛑 Graceful Shutdown...");
    await mongoose.disconnect();
    server.close(() => process.exit(0));
  });
};

startServer();

export default app;
