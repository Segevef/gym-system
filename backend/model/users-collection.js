// user

const mongoose = require("mongoose");

const subAddressSchema = new mongoose.Schema({
  city: { type: String },
  street: { type: String },
  postalCode: { type: Number }
});

const userSchema = new mongoose.Schema({
  userName: { type: String, required: true, index: { unique: true } },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  address: subAddressSchema,
  userClasses: { type: [String], default: void 0 } 
});

module.exports = mongoose.model("Users", userSchema);
