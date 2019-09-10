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
    console.log('inside login method');
    console.log(req.body.username);
    console.log(req.body.password);
    if (!req.body.username || !req.body.password) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
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

// // get all patient details from database
// router.get('/patients', function (req, res, next) {
//     console.log("inside getallpeatientsapi");
//     patient.find(function (err, patientDetails) {
//         if (err) {
//             return next(err);
//         }
//         res.json(patientDetails);
//     });
// });

// // get all medical reports details from database
// router.get('/reports', function (req, res, next) {
//     console.log("inside getallreports method");
//     report.find(function (err, reportDetails) {
//         if (err) {
//             return next(err);
//         }
//         res.json(reportDetails);
//     });
// });

// // get all hospital records details from database
// router.get('/hospitals', function (req, res, next) {
//     console.log("inside getallhospitals method");
//     hospital.find(function (err, hospitalDetails) {
//         if (err) {
//             return next(err);
//         }
//         res.json(hospitalDetails);
//     });
// });

// router.post('/createreport', (req, res, next) => {
//     console.log("Inside create report functionnn");
//     if (!req.body.reporttype || !req.body.price) {
//         return res.status(400).json({
//             message: 'Please fill out all fields'
//         });
//     }
//     var report = new Report(req.body);
//     report.save(function (err, data) {
//         if (err) {
//             res
//                 .status(400)
//                 .send({
//                     message: "error"
//                 });
//         } else {
//             console.log("inside elseeeeeeee create report block");
//             res.send({
//                 message: "report created"
//             }).status(200);
//         }
//     });
// });

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
    var user = new User(req.body);
    console.log(req.body.usertype);

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

// router.post('/createpatient', (req, res, next) => {
//     console.log("Inside create patient functionnn");
//     console.log(req.body.firstName);
//     if (!req.body.firstName || !req.body.lastName) {
//         return res.status(400).json({
//             message: 'Please fill out all fields'
//         });
//     }
//     var patient = new Patient(req.body);
//     patient.save(function (err, data) {
//         if (err) {
//             res
//                 .status(400)
//                 .send({
//                     message: "error"
//                 });
//         } else {
//             console.log("inside elseeeeeeee create patient block");
//             res.send({
//                 message: "patient created"
//             }).status(200);
//         }
//     });

//     router.post('http://18.191.129.98:3000/api/org.example.biznet.Patient', (req, res, next) => {
//         res.setHeader('Content-Type', 'application/json');
//         res.json(JSON.stringify({ 
//             "$class": "org.example.biznet.Patient",
//                 "patientId": "pp1",
//                 "firstName": patient.firstName,
//                 "lastName": patient.lastName
//          }));
//         // res.send();
// });
// });


router.get('/getallusers', (req, res) => {
    db.collection('user').find().toArray(function (err, result) {
        if (err) return console.log(err)

        console.log('saved to database')
        res.send(result)
    })
})

router.put('/updateuser/:userid', (req, res) => {
    db.collection('user').findOneAndUpdate({
        _id: objectId(req.param("userid"))
    }, {
        $set: {

            name: req.body.name,
            address: req.body.address

        }
    }, {
        upsert: false
    }, (err, result) => {
        if (err) return res.send(err)
        res.send(200, result)
    })
})

router.delete('/user/deleteuser/:userid', (req, res) => {
    db.collection('user').deleteOne({
            _id: objectId(req.param("userid"))
        },
        (err, result) => {
            if (err) return res.send(500, err)
            res.send({
                message: 'The user has been deleted'
            })
        })
})
router.get('/hospital/findallreports', (req, res) => {
    db.collection('Report').find().toArray(function (err, result) {
        if (err) return console.log(err)

        console.log('saved to database')
        res.send(result)
    })
})

router.post('/hospital/createreport', (req, res) => {
    db.collection('Report').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
        res.redirect('/')
    })
})



router.delete('/hospital/deletereport/:reportid', (req, res) => {
    db.collection('Report').deleteOne({
            _id: objectId(req.param("reportid"))
        }),
        (err, result) => {
            if (err) return res.send(500, err)
            res.send({
                message: 'The report has been deleted'
            })
        }
})

router.get('/hospital/getallreportsbyhospital/:hospitalid', (req, res) => {
    db.collection('Report').find({
        _id: req.param("hospitalid")
    }).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);

    });
})

router.get('/hospital/getallreportsbypatient/:patientid', (req, res) => {
    db.collection('Report').find({
        _id: req.param("patientid")
    }).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);

    });
})

router.put('/hospital/updatereport/:reportid', (req, res) => {
    db.collection('Report').findOneAndUpdate({
        _id: req.param("reportid")
    }, {
        $set: {
            diagnosis: req.body.diagnosis
        }
    }, {
        upsert: false
    }, (err, result) => {
        if (err) return res.send(err)
        res.send(result)
    })
})

router.post('/report/createagreement', (req, res) => {
    db.collection('agreement').save(req.body, (err, result) => {
        if (err) return console.log(err)

        console.log('saved to database')
        res.redirect('/')
    })
})

router.put('/report/updateagreement/:agreementid', (req, res) => {
    db.collection('agreement').findOneAndUpdate({
        _id: req.param("agreementid")
    }, {
        $set: {

            diagnosis: req.body.diagnosis
        }
    }, {
        upsert: false
    }, (err, result) => {
        if (err) return res.send(err)
        res.send(result)
    })
})

router.get('/report/getallagreementsbypatient/:patientid', (req, res) => {
    db.collection('agreement').find({
        _id: req.param("patientid")
    }).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);

    });
})

module.exports = router;