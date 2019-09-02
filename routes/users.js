const User = require('../models/users');
var mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
var user = mongoose.model('User');

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
// gets posts from database
router.get('/reports', function(req, res, next) {
    Post.find(function(err, reports){
      if(err){ return next(err); }
      res.json(reports);
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

module.exports = router;