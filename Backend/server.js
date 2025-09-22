// server.js
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

// Import route files
import authRoutes from "./routes/auth.js";
import contactRoutes from "./routes/contact.js";
import protectedRoutes from "./routes/protected.js";

// Load environment variables
dotenv.config();

const app = express();

// ---------------- Middleware ----------------
app.use(
  cors({
    origin: "https://readytech-site.netlify.app/", // 👈 Allow all domains (can restrict later to your Netlify domain)
    credentials: true,
  })
);
app.use(express.json()); // Parse JSON request bodies

// ---------------- Routes ----------------
app.get("/", (req, res) => {
  res.send("🚀 ReadyTech Backend is running!");
});

app.use("/api/auth", authRoutes);          // Authentication routes
app.use("/api/contact", contactRoutes);    // Contact form & mailing routes
app.use("/api/protected", protectedRoutes); // Protected (JWT/role-based) routes

// ---------------- MongoDB Connection ----------------
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // options not required in Mongoose v7+, but adding for safety
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1); // Stop the app if DB fails
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
