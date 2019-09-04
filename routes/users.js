const User = require('../models/users');
const Patient = require('../models/patient');
const Report = require('../models/report');
const Hospital = require('../models/hospital');
var mongoose = require('mongoose');
var user = mongoose.model('User');
var patient = mongoose.model('Patient');
var report = mongoose.model('Report');
var hospital = mongoose.model('Hospital');
const express = require('express');
const router = express.Router();


router.post('/login', function (req, res) {
    console.log('inside login methorrrrrrrrrrrrd');
    console.log(req.body.username);
    console.log(req.body.password);
    if(!req.body.username || !req.body.password){
      return res.status(400).json({message: 'Please fill out all fields'});
    }
    
    user.findOne({
        'username': req.body.username,
        'password': req.body.password
    }).then(function (doc) {
        if (!doc) {
            throw new Error('No record found.');
            console.log(doc);
        } else {
            console.log('inside elseeeeeee');
            res.send(doc);
        }
    })
});

router.get('/getall', (req, res) => {
    res.json({"message": "You are Smart."});
});

// gets  patientDetails from database
router.get('/patients', function(req, res, next) {
    console.log("inside getallpeatientsapi");
    patient.find(function(err, patientDetails){
      if(err){ return next(err); }
      res.json(patientDetails);
    });
  });

  // gets  patientDetails from database
router.get('/patients1', function(req, res, next) {
    console.log("inside getallpeatientsapi");
    patient.find(function(err, patientDetails){
      if(err){ return next(err); }
      res.json(patientDetails);
    });
  });

  // gets  medical report details from database
router.get('/reports', function(req, res, next) {
    console.log("inside getallreports method");
    report.find(function(err, reportDetails){
      if(err){ return next(err); }
      res.json(reportDetails);
    });
  });

  
router.post('/createreport', (req, res, next) => {
    console.log("Inside create report functionnn");
   
    if (!req.body.name || !req.body.addressline1) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }
    var report = new Report(req.body);
    //report.reporttype = req.body.reporttype;
   // report.reportdate = req.body.reportdate;

    //report.price = req.body.price;
   // report.diagnosis = req.body.diagnosis;
    report.save(function (err) {
        if (err) {
            return next(err);
        } else {

            console.log("inside elseeeeeeee create report block");
        }
        return res.json({})
    });
});

  

router.post('/registration', (req, res, next) => {
    console.log("Inside register functionnn");
   // console.log(req.body.username);
   // console.log(req.body.password);
    //console.log(req.body.email);
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }
    var user = new User();
    user.username = req.body.username;
    user.password = req.body.password;
    
    user.name = req.body.name;
    user.address = req.body.address;
    user.email = req.body.email;
    user.contact = req.body.contact;

    user.abn = req.body.abn;
    user.dob = req.body.dob;
    user.bloodtype = req.body.bloodtype;
    user.gender = req.body.gender;
    
    user.usertype = req.body.usertype;
    console.log(req.body.usertype);

  //  user.usertype = req.body.usertype;
   // console.log(req.body.usertype);
    
   // user.setPassword(req.body.password)
    user.save(function (err) {
        if (err) {
            return next(err);
        } else {

            console.log("inside elseeeeeeee block");
        }
        return res.json(true);
    });
});



router.post('/createpatient', (req, res, next) => {
    console.log("Inside create patient functionnn");
    console.log(req.body.name);
    console.log(req.body.addressline1);
    console.log(req.body.addressline2);
    if (!req.body.name || !req.body.addressline1) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }
    var patient = new Patient();
    patient.name = req.body.name;
    patient.addressline1 = req.body.addressline1;
    patient.phone = req.body.phone;
    patient.addressline2 = req.body.addressline2;
   // user.setPassword(req.body.password)
   patient.save(function (err) {
        if (err) {
            return next(err);
        } else {

            console.log("inside elseeeeeeee create ptient block");
        }
        return res.json({})
    });
});

module.exports = router;