// class

const mongoose = require("mongoose");

const classGYMSchma = new mongoose.Schema({
  className: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: String, required: true },
  duration: { type: Number, required: true },
  instructorName: { type: String, required: true },
  timeSlots: { type: String, required: true }, 
  maxParticipants: { type: Number, required: true },
  isAvailable: { type: Boolean, default: true },
  usersIds: { type: [String], default: [] },
  waitingList: { type: [String], default: [] }, 
  extraInfo: {type: String, defualt: null},
  classImage: { type: String, default: null }
});

module.exports = mongoose.model("Classes", classGYMSchma);


