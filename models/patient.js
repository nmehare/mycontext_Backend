
var mongoose = require('mongoose');

var PatientSchema = new mongoose.Schema({
    name: {type:String, trim:true, default:''},
    dob: {type:Date},
    address: {type:String, trim:true, default:''},
    email: {type:String, trim:true, default:''},
    contactNumber: {type:Number, default:0},
    gender : {type:String, trim:true, default:''},
    bloodType : {type:String, trim:true, default:''},
    cancerType: {type:String, trim:true, default:''},
    userId: {type:String}
});

module.exports = mongoose.model('Patient', PatientSchema);