// ========================================================
// 📦 Work Routes — Full CRUD for Admin Panel
// ========================================================

import express from "express";
import Work from "../models/Work.js"; // ✅ Ensure Work model path is correct

const router = express.Router();

/**
 * ✅ POST /api/work/add
 * Create a new work/task
 */
router.post("/add", async (req, res) => {
  try {
    const { employeeId, taskTitle, description, status, deadline, createdBy } = req.body;

    if (!employeeId || !taskTitle) {
      return res.status(400).json({
        success: false,
        message: "Employee ID and Task Title are required.",
      });
    }

    const newWork = new Work({
      employeeId,
      taskTitle,
      description,
      status: status || "In Progress",
      deadline,
      createdBy: createdBy || "Admin",
    });

    const savedWork = await newWork.save();

    res.status(201).json({
      success: true,
      message: "Work added successfully",
      work: savedWork,
    });
  } catch (err) {
    console.error("❌ POST /api/work/add error:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
});

/**
 * ✅ GET /api/work/all
 * Fetch all works
 */
router.get("/all", async (req, res) => {
  try {
    const works = await Work.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: works.length,
      works,
    });
  } catch (err) {
    console.error("❌ GET /api/work/all error:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
});

/**
 * ✅ GET /api/work/employee/:employeeId
 * Fetch work by employee ID
 */
router.get("/employee/:employeeId", async (req, res) => {
  try {
    const { employeeId } = req.params;
    if (!employeeId) {
      return res.status(400).json({
        success: false,
        message: "Employee ID is required",
      });
    }

    const works = await Work.find({ employeeId }).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: works.length,
      works,
    });
  } catch (err) {
    console.error("❌ GET /api/work/employee/:employeeId error:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
});

/**
 * ✅ PATCH /api/work/update/:id
 * Update work status or details
 */
router.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status, taskTitle, description, deadline } = req.body;

    const updatedFields = {
      ...(status && { status }),
      ...(taskTitle && { taskTitle }),
      ...(description && { description }),
      ...(deadline && { deadline }),
      updatedAt: new Date(),
    };

    const updated = await Work.findByIdAndUpdate(id, updatedFields, { new: true });

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Work not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Work updated successfully",
      work: updated,
    });
  } catch (err) {
    console.error("❌ PATCH /api/work/update/:id error:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
});

/**
 * ✅ DELETE /api/work/delete/:id
 * Delete a specific work item
 */
router.delete("/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Work.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: "Work not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Work deleted successfully",
      work: deleted,
    });
  } catch (err) {
    console.error("❌ DELETE /api/work/delete/:id error:", err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
});
export default router;
