const mongoose = require("mongoose");


// message schema
const messageSchema = new mongoose.Schema(
  {
    content: { type: String, required: true, trim: true },
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    sender: { type: String, required: true, enum: ["bot", "user"] }, // Only "bot" or "user" allowed
  },
  { timestamps: true }
);

// message model
const Message = mongoose.model("Message", messageSchema);

// export the message model
module.exports = Message;
