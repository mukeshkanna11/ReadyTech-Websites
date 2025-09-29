// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Import routes
import authRoutes from "./routes/auth.js";
import contactRoutes from "./routes/contact.js";
import protectedRoutes from "./routes/protected.js";

dotenv.config();
const app = express();

// ---------------- Middleware ----------------
const allowedOrigins = [
  "http://localhost:5173",           // React dev server (check your Vite port)
  "https://readytech-site.netlify.app"
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

app.use(express.json()); // parse JSON body

// ---------------- Routes ----------------
app.get("/", (req, res) => {
  res.send("🚀 ReadyTech Backend is running!");
});

app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);   // ✅ Mounting Contact Route
app.use("/api/protected", protectedRoutes);

// ---------------- MongoDB Connection ----------------
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB error:", err.message);
    process.exit(1);
  }
};
connectDB();

// ---------------- Server Listener ----------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

export default app;
