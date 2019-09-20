var mongoose = require('mongoose');

var AgreementSchema = new mongoose.Schema({
  status: { type: String},
  requestDate: { type: Date, default: Date.now },
  buyer: { type: mongoose.Schema.Types.ObjectId, ref: 'Buyer' },
  report: { type: mongoose.Schema.Types.ObjectId, ref: 'Report' }
  //patients: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient' }
});

module.exports = mongoose.model('Agreement', AgreementSchema);