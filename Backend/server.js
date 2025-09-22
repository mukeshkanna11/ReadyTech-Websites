import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.js";
import contactRoutes from "./routes/contact.js";
import protectedRoutes from "./routes/protected.js";

dotenv.config(); // Load environment variables from .env

const app = express();

// Middleware
app.use(cors());             // Enable CORS for all routes
app.use(express.json());     // Parse JSON request bodies


// Routes
app.use("/api/auth", authRoutes);      // Authentication routes
app.use("/api/contact", contactRoutes); // Contact routes (contact form, mail, subscribe)
app.use("/api/protected", protectedRoutes); // Protected routes (dashboard)

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI); // modern driver, no deprecated options needed
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // Exit process with failure
  }
};

connectDB();

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// Optional: export app for testing
export default app;
