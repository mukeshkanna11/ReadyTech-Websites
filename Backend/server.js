// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Import route files
import authRoutes from "./routes/auth.js";
import contactRoutes from "./routes/contact.js";
import protectedRoutes from "./routes/protected.js";

// Load environment variables from .env
dotenv.config();

const app = express();

// ---------------- Middleware ----------------
// ✅ CORS: Allow both localhost dev & deployed frontend
const allowedOrigins = [
  "http://localhost:5175",           // React dev server
  "https://readytech-site.netlify.app" // Deployed frontend
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g., Postman)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      callback(new Error("Not allowed by CORS"));
    },
    credentials: true, // Allow cookies and authorization headers
  })
);

// Parse JSON request bodies
app.use(express.json());

// ---------------- Routes ----------------
app.get("/", (req, res) => {
  res.send("🚀 ReadyTech Backend is running!");
});

app.use("/api/auth", authRoutes);           // Authentication routes
app.use("/api/contact", contactRoutes);     // Contact form routes
app.use("/api/protected", protectedRoutes); // Protected routes (JWT)

// ---------------- MongoDB Connection ----------------
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Mongoose v7+ no options required
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // Stop server if DB fails
  }
};

connectDB();

// ---------------- Server Listener ----------------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

// Optional: Export for testing (e.g., Jest, Supertest)
export default app;
