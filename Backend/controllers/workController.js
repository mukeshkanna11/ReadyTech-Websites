import Work from "../models/Work.js";

/**
 * GET /api/work/all
 */
export const getAllWorks = async (req, res, next) => {
  try {
    const works = await Work.find().sort({ createdAt: -1 });
    return res.json({ works });
  } catch (err) {
    next(err);
  }
};

/**
 * POST /api/work/add
 * body: { employeeId, taskTitle, description, status, deadline }
 */
export const addWork = async (req, res, next) => {
  try {
    const { employeeId, taskTitle, description, status, deadline } = req.body;
    if (!employeeId || !taskTitle) {
      return res.status(400).json({ message: "employeeId and taskTitle required" });
    }
    const newWork = new Work({ employeeId, taskTitle, description, status, deadline });
    const saved = await newWork.save();
    return res.status(201).json({ success: true, work: saved });
  } catch (err) {
    next(err);
  }
};

/**
 * PATCH /api/work/update/:id
 * body: { status?, taskTitle?, description?, deadline?, employeeId? }
 */
export const updateWork = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const allowed = ["status", "taskTitle", "description", "deadline", "employeeId"];
    const payload = {};
    for (const key of allowed) if (updates[key] !== undefined) payload[key] = updates[key];

    const updated = await Work.findByIdAndUpdate(id, payload, { new: true });
    if (!updated) return res.status(404).json({ success: false, message: "Work not found" });
    return res.json({ success: true, work: updated });
  } catch (err) {
    next(err);
  }
};
