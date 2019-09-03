const User = require('../models/users');
const Patient = require('../models/patient');
var mongoose = require('mongoose');
var user = mongoose.model('User');
var patient = mongoose.model('Patient');
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

  

router.post('/registration', (req, res, next) => {
    console.log("Inside register functionnn");
    console.log(req.body.username);
    console.log(req.body.password);
    console.log(req.body.email);
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }
    var user = new User();
    user.email = req.body.email;
    user.username = req.body.username;
   // user.phone = req.body.phone;
    user.password = req.body.password;
   // user.setPassword(req.body.password)
    user.save(function (err) {
        if (err) {
            return next(err);
        } else {

            console.log("inside elseeeeeeee block");
        }
        return res.json({})
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