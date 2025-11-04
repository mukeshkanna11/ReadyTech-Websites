// Backend/routes/workRoutes.js
import express from "express";
import Work from "../models/Work.js"; // make sure this path is correct and Work model exists

const router = express.Router();

/**
 * POST /api/work/add
 */
router.post("/add", async (req, res) => {
  try {
    const { employeeId, taskTitle, description, status, deadline, createdBy } = req.body;
    if (!employeeId || !taskTitle) {
      return res.status(400).json({ success: false, message: "Employee ID and Task Title are required." });
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
    return res.status(201).json({ success: true, message: "Work added successfully", work: savedWork });
  } catch (err) {
    console.error("POST /api/work/add error:", err);
    return res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
  }
});

/**
 * GET /api/work/all
 */
router.get("/all", async (req, res) => {
  try {
    const works = await Work.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: works.length, works });
  } catch (err) {
    console.error("GET /api/work/all error:", err);
    return res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
  }
});

/**
 * GET /api/work/employee/:employeeId
 */
router.get("/employee/:employeeId", async (req, res) => {
  try {
    const { employeeId } = req.params;
    if (!employeeId) return res.status(400).json({ success: false, message: "Employee ID required" });

    const works = await Work.find({ employeeId }).sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: works.length, works });
  } catch (err) {
    console.error("GET /api/work/employee/:employeeId error:", err);
    return res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
  }
});

/**
 * PATCH /api/work/update/:id
 */
router.patch("/update/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    if (!status) return res.status(400).json({ success: false, message: "Status is required" });

    const updated = await Work.findByIdAndUpdate(id, { status, updatedAt: new Date() }, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: "Work not found" });

    return res.status(200).json({ success: true, message: "Work status updated successfully", work: updated });
  } catch (err) {
    console.error("PATCH /api/work/update/:id error:", err);
    return res.status(500).json({ success: false, message: "Internal Server Error", error: err.message });
  }
});

export default router;
