// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Import routes
import authRoutes from "./routes/auth.js";
import contactRoutes from "./routes/contact.js"; // ✅ handles both contact & subscribe
import protectedRoutes from "./routes/protected.js";

dotenv.config();
const app = express();

// ---------------- Middleware ----------------

// CORS configuration
const allowedOrigins = [
  "http://localhost:5173",           // Vite dev server
  "http://localhost:5174",           // Alternate dev port
  "https://readytech-site.netlify.app" // Production frontend
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (Postman, curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// Parse incoming JSON
app.use(express.json());

// ---------------- Routes ----------------
app.get("/", (req, res) => {
  res.send("🚀 ReadyTech Backend is running!");
});

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);  // ✅ handles both contact & subscribe
app.use("/api/protected", protectedRoutes);

// ---------------- MongoDB Connection ----------------
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  }
};
connectDB();

// ---------------- Global Error Handler ----------------
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err);
  res.status(500).json({ msg: "Internal Server Error", error: err.message });
});

// ---------------- Server Listener ----------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

export default app;
