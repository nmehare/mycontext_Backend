var mongoose = require('mongoose');

var HospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  address: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },
  contactNumber: {
    type: String
  },
  abn: {
    type: String
  },
  userId:  { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Hospital', HospitalSchema);