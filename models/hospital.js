var mongoose = require('mongoose');

var HospitalSchema = new mongoose.Schema({
  hospitalname: { type: String},
  contact: { type: Number},
  address: {type: String}
});

module.exports = mongoose.model('Hospital', HospitalSchema);