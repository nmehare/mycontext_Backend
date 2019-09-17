const mongoose = require('mongoose')

const BuyerSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    trim: true
  },
  address: {
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

})

module.exports = mongoose.model('Buyer', BuyerSchema)