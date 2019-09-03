var mongoose = require('mongoose');

var ReportSchema = new mongoose.Schema({
  reporttype: { type: String},
  reportdate: { type: Date, default: Date.now },
  price: {type: Number},
  diagnosis: {type: String},
  patient: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }],
  hospital: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Hospital' }]
});

module.exports = mongoose.model('Report', ReportSchema);


