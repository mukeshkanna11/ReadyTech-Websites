import mongoose from "mongoose";
import Ticket from "./models/Ticket.js"; // adjust path

const fixResponses = async () => {
  await mongoose.connect("mongodb://localhost:27017/rtech_db"); // Replace DB name

  const tickets = await Ticket.find({ "responses.from": { $in: ["Admin", "Employee"] } });

  for (const ticket of tickets) {
    ticket.responses.forEach(r => {
      if (r.from === "Admin") r.from = "admin";
      if (r.from === "Employee") r.from = "employee";
    });
    await ticket.save();
    console.log(`Updated ticket ${ticket.tokenId}`);
  }

  console.log("All tickets updated");
  mongoose.disconnect();
};

fixResponses().catch(console.error);
