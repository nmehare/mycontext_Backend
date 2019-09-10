
var mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({
  firstName: { type: String, required:true},
  lastName: { type: String, required:true},
  dob: { type: Date, default: Date.now },
  bloodtype: { type: Date, default: Date.now },
  addressLine1: {type: String},
  addressLine2: {type: String},
  email: String,
  phone: Number,
  gender:String
});

module.exports = mongoose.model('Patient', PatientSchema);