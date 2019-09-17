const User = require('../models/users');
const Patient = require('../models/patient');
const Report = require('../models/report');
const Hospital = require('../models/hospital');
const Agreement = require('../models/agreement');
const Buyer = require('../models/buyer');
//var nodemon = require('nodemon');
var mongoose = require('mongoose');
var user = mongoose.model('User');
var patient = mongoose.model('Patient');
var report = mongoose.model('Report');
var hospital = mongoose.model('Hospital');
var agreement = mongoose.model('Agreement');
var buyer = mongoose.model('Buyer');
const express = require('express');
var request = require('request');
var async = require("async");
const blockchainConfig = require('../config/blockchain.config.js');
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
    //Cannot set headers after they are sent to the client

    // patient.findOne({
    //     'userId': '5d804618bf99f504fc7a1ff7'
    // }).populate('userId').exec(function(err,response){
    //     console.log('inside populate');
    //     console.log(response);
    // });

    user.findOne({
        'username': req.body.username,
        'password': req.body.password
    }).then(function (doc) {
        if (!doc) {
            throw new Error('No record found.');
            console.log(doc);
        } else {
            if (doc.usertype == "patient") {
                console.log('inside patient method');
                patient.findOne({
                    'userId': doc._id
                }).populate('userId').exec(function (err, response) {
                    if (err) {
                        return next(err);
                    } else {
                        console.log(response);
                        return res.send(response);
                    }
                });
            } else if (doc.usertype == "hospital") {
                console.log('inside hospital method');
                hospital.findOne({
                    'userId': doc._id
                }).populate('userId').exec(function (err, response) {
                    if (err) {
                        return next(err);
                    } else {
                        console.log(response);
                        return res.send(response);
                    }
                });
            } else if (doc.usertype == "buyer") {
                buyer.findOne({
                    'userId': doc._id
                }).populate('userId').exec(function (err, response) {
                    if (err) {
                        return next(err);
                    } else {
                        console.log(response);
                        return res.send(response);
                    }
                });
            }
        }
    })


});

router.post('/registration', (req, res, next) => {
    console.log("Inside register functionnn");
    // console.log(req.body.username);
    // console.log(req.body.password);
    // console.log(req.body.email);


    if (!req.body.username || !req.body.password) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }
    var user = new User();
    var id;
    user.usertype = req.body.usertype;
    user.username = req.body.username;
    user.password = req.body.password;
    id = user._id;
    console.log(id);
    user.save(function (err) {
        if (err) {
            return next(err);
        } else {
            return res.json({
                message: "User inserted"
            }).status(200);
        }
    });

    console.log(id);

    var name = req.body.name;
    var email = req.body.email;
    var address = req.body.address;
    var phone = req.body.contact;

    if (user.usertype == "patient") {
        var patient = new Patient();
        patient.name = name;
        patient.email = email;
        patient.address = address;
        patient.contactNumber = phone;
        patient.dob = req.body.dob;
        patient.bloodType = req.body.bloodtype;
        patient.gender = req.body.gender;
        patient.cancerType = req.body.cancertype;
        patient.userId = id;
        patient.save(function (err) {
            if (err) {
                return next(err);
            } else {
                return res.json({
                    message: "patient inserted"
                }).status(200);
            }
        });
    } else if (user.usertype == "hospital") {
        var hospital = new Hospital();
        hospital.name = name;
        hospital.email = email;
        hospital.address = address;
        hospital.contactNumber = phone;
        hospital.abn = req.body.abn;
        hospital.userId = id;
        hospital.save(function (err) {
            if (err) {
                return next(err);
            } else {
                return res.json({
                    message: "hospital inserted"
                }).status(200);
            }
        });
    } else if (user.usertype == "buyer") {
        var buyer = new Buyer();
        buyer.name = name;
        buyer.email = email;
        buyer.address = address;
        buyer.contactNumber = phone;
        buyer.abn = req.body.abn;
        buyer.userId = id;
        buyer.save(function (err) {
            if (err) {
                return next(err);
            } else {
                return res.json({
                    message: "buyer inserted"
                }).status(200);
            }
        });
    }
    //user.setPassword(req.body.password)

});

// get all patient details from database
router.get('/patients', function (req, res, next) {
    console.log("inside getallpeatientsapi");
    patient.find(function (err, patientDetails) {
        if (err) {
            return next(err);
        }
        res.json(patientDetails);
    });
});

router.get('/users', function (req, res, next) {
    console.log("inside getallusersapi");
    user.find(function (err, userDetails) {
        if (err) {
            return next(err);
        }
        res.json(userDetails);
    });
});



// get all medical reports details from database
router.get('/reports', function (req, res, next) {
    console.log("inside getallreports method");
    report.find(function (err, reportDetails) {
        if (err) {
            return next(err);
        }
        res.json(reportDetails);
    });
});

// get all hospital records details from database
router.get('/hospitals', function (req, res, next) {
    console.log("inside getallhospitals method");
    hospital.find(function (err, hospitalDetails) {
        if (err) {
            return next(err);
        }
        res.json(hospitalDetails);
    });
});

// get all agreement records details from database
router.get('/agreements', function (req, res, next) {
    console.log("inside getallagreement method");
    agreement.find(function (err, agreementDetails) {
        if (err) {
            return next(err);
        }
        res.json(agreementDetails);
    });
});




// get all medical reports details filtered by buyer from database
router.get('/reportbybuyer/:buyerid', function (req, res, next) {
    var reportarray = [];
    console.log("inside getallreportsbybuyer method");
    agreement.find({
        buyer: req.param("buyerid")
    }, function (err, agreementDetails) {
        if (err) {
            return next(err);
        } else {
            agreementDetails.forEach(function (agreementDetails) {
                console.log(agreementDetails.report);
                report.findOne({
                    _id: agreementDetails.report
                }, function (err, reportDetails) {
                    if (err) {
                        return next(err);
                    } else {
                        console.log(reportDetails);
                        reportarray.push(reportDetails);
                        console.log(reportarray);
                    }
                });
            });
            console.log(reportarray);
            return res.send(reportarray);
            //res.send(reportarray);
            console.log("xzczc");
        }
    });
});


router.put('/updatereport/:reportid', (req, res) => {
    if (!req.body.reporttype || !req.body.price) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }
    report.updateOne({
        _id: req.param("reportid")
    }, {
        reporttype: req.body.reporttype,
        reportdate: req.body.reportdate,
        price: req.body.price,
        diagnosis: req.body.diagnosis,
        patient: req.body.patient,
        hospital: req.body.hospital
    }, function (err, data) {
        if (err) {
            res
                .status(400)
                .send({
                    message: "error"
                });
        } else {
            res.send({
                message: "report updated"
            }).status(200);
        }
    });
});

router.delete('/deletereport/:reportid', (req, res) => {
    report.deleteOne({
            _id: req.param("reportid")
        },
        function (err, data) {
            if (err) {
                res
                    .status(400)
                    .send({
                        message: "error"
                    });
            } else {
                res.send({
                    message: "report deleted"
                }).status(200);
            }
        });
});

router.post('/createagreement', (req, res, next) => {
    console.log("Inside create agreement functionnn");
    if (!req.body.buyer || !req.body.report) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }
    var agreement = new Agreement(req.body);
    agreement.save(function (err, data) {
        if (err) {
            res
                .status(400)
                .send({
                    message: "error"
                });
        } else {
            console.log("inside elseeeeeeee create agreement block");
            res.send({
                message: "agreement created"
            }).status(200);
        }
    });
});

router.put('/updateagreement/:agreementid', (req, res) => {
    if (!req.body.buyer || !req.body.report) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }

    agreement.updateOne({
        _id: req.param("agreementid")
    }, {
        status: req.body.status,
        buyer: req.body.buyer,
        report: req.body.report

    }, function (err, data) {
        if (err) {
            res
                .status(400)
                .send({
                    message: "error"
                });
        } else {
            res.send({
                message: "agreement updated"
            }).status(200);
        }
    });
});

router.delete('/deleteagreement/:agreementid', (req, res) => {
    agreement.deleteOne({
            _id: req.param("agreementid")
        },
        function (err, data) {
            if (err) {
                res
                    .status(400)
                    .send({
                        message: "error"
                    });
            } else {
                res.send({
                    message: "agreement deleted"
                }).status(200);
            }
        });
});

// get all agreements  details of the buyer from database
router.get('/agreementbybuyer/:buyerid', function (req, res, next) {
    var reportarray = [];
    console.log("inside getallagreementbybuyer method");
    agreement.find({
        buyer: req.param("buyerid")
    }, function (err, agreementDetails) {
        if (err) {
            return next(err);
        } else {
            res.send(agreementDetails);
        }
    });
});

router.post('/createhospital', (req, res, next) => {
    console.log("Inside create hospital functionnn");
    if (!req.body.hospitalname || !req.body.address) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }
    var hospital = new Hospital(req.body);
    hospital.save(function (err, data) {
        if (err) {
            res
                .status(400)
                .send({
                    message: "error"
                });
        } else {
            console.log("inside elseeeeeeee create hospital block");
            res.send({
                message: "hospital created"
            }).status(200);
        }
    });
});

router.post('/createreport', (req, res, next) => {
    console.log("Inside create report functionnn");
    if (!req.body.reporttype || !req.body.price) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }
    var report = new Report(req.body);
    report.save(function (err, data) {
        if (err) {
            res
                .status(400)
                .send({
                    message: "error"
                });
        } else {
            console.log("inside elseeeeeeee create report block");
            res.send({
                message: "report created"
            }).status(200);
        }
    });
});



router.post('/createpatient', (req, res, next) => {
    console.log("Inside create patient functionnn");
    console.log(req.body.firstName);
    if (!req.body.firstName || !req.body.lastName) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }
    var patient = new Patient(req.body);
    patient.save(function (err, data) {
        if (err) {
            res
                .status(400)
                .send({
                    message: "error"
                });
        } else {
            console.log("inside elseeeeeeee create patient block");
            res.send({
                message: "patient created"
            }).status(200);
        }
    });
});

// get all medical reports details filtered by hospital from database
router.get('/reportbyhospital/:hospitalid', function (req, res, next) {

    console.log("inside getallreportsbyhospital method");
    report.find({
        hospital: req.param("hospitalid")
    }, function (err, reportdetails) {
        if (err) {
            return next(err);
        } else {

            res.send(reportdetails);

        }

    });
});

// get all medical reports details filtered by report id from database
router.get('/reports/:reportId', function (req, res, next) {

    console.log("inside getallreportsbyreportId method");
    report.find({
        _id: req.param("reportId")
    }, function (err, reportdetails) {
        if (err) {
            return next(err);
        } else {

            res.send(reportdetails);

        }

    });
});

// get all medical reports details filtered by report id from database
router.get('/agreements/:agreementId', function (req, res, next) {

    console.log("inside getallagreementsbyagreementId method");
    agreement.find({
        _id: req.param("reporagreementIdtId")
    }, function (err, agreementdetails) {
        if (err) {
            return next(err);
        } else {

            res.send(agreementdetails);

        }

    });
});

// get all medical reports details filtered by hospital from database
router.get('/reportbypatient/:patientid', function (req, res, next) {

    console.log("inside getallreportsbypatient method");
    report.find({
        patient: req.param("patientid")
    }, function (err, reportdetails) {
        if (err) {
            return next(err);
        } else {

            res.send(reportdetails);

        }

    });
});


// get all medical reports details filtered by buyer from database
router.get('/reportbybuyer1/:buyerid', function (req, res, next) {
    var reportarray = [];
    console.log("inside getallreportsbybuyer method");
    agreement.find({
        buyer: req.param("buyerid")
    }, function (err, agreementDetails) {
        if (err) {
            return next(err);
        } else {
            console.log(" console.log(agreementDetails);  " + agreementDetails);
            console.log(agreementDetails.report);
            report.find({
                'report': agreementDetails.report
            }).exec((err, company) => {
                if (err) {
                    return res.status(500).json(err);
                } else if (!company) {
                    return res.status(404).json(); // Only this runs.
                } else {
                    console.log(company);
                    return res.status(200).json(company);
                }
            });
            console.log("xzczc");
        }
    });
});



function findInDb(id, callback) {
    var reportarray = [];
    agreement.find(id, function (err, agreementDetails) {
        if (err) {
            return callback(err)
        };
        agreementDetails.forEach(function (agreementDetails) {
            console.log(agreementDetails.report);

            report.findOne({
                _id: agreementDetails.report
            }, function (err, reportDetails) {
                if (err) {
                    return next(err);
                } else {
                    //console.log(reportDetails);
                    reportarray.push(reportDetails);
                    // console.log(reportarray);
                }
            });
        });
        return reportarray;
        //console.log(reportarray);
        //res.send(reportarray);
        // console.log("xzczc");

        //var obj = JSON.parse(data)[0] // or something
        //callback(null, reportarray)
    });
};

router.get('/reportbybuyer2/:buyerid', function (req, res, next) {

    async.series([
            function (callback) {
                findInDb({
                    buyer: req.param("buyerid")
                }, callback);
            }
        ],
        function (err, results) {
            if (err) {
                res.status(500).send('something went wrong');
            } else {
                if (results && results.length > 1) {
                    res.status(200).send(results)
                }
            }
        }
    )
});

//blockchain API's
router.get('/blockchainapi/medicalrecords', (req, res, next) => {
    request(blockchainConfig.url + '/org.example.biznet.MedicalRecord', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    });
});

router.get('/blockchainapi/hospitals', (req, res, next) => {
    request(blockchainConfig.url + '/org.example.biznet.Hospital', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    });
});

router.get('/blockchainapi/buyers', (req, res, next) => {
    request(blockchainConfig.url + '/org.example.biznet.Buyer', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            res.send(body);
        }
    });
});

//POST Methods

// {
//     "$class": "org.example.biznet.Patient",
//     "patientId": "string",
//     "name": "string",
//     "bloodtype": "string",
//     "cancertype": "string",
//     "contactnumber": "string",
//     "email": "string"
//   }
router.post('/blockchainapi/createpatient', (req, res, next) => {    
    request(blockchainConfig.url + '/org.example.biznet.Patient', function (error, res, body) { 
       // res.setHeader('Content-Type', 'application/json');
        if (!error && res.statusCode == 200) {
            data = {
                "$class": "org.example.biznet.Patient",
                "patientId": "pp3",
                "name": "tstpatient",
                "bloodtype": "bloodtype",
                "cancertype": "skin",
                "contactnumber": "34345",
                "email": "test@gmail.com"
            };
            res.json(data);
        }
    });
});


router.post('/blockchainapi/createrecord', (req, res, next) => {
    request(blockchainConfig.url + '/org.example.biznet.MedicalRecord', function (error, res, body) {
        res.setHeader('Content-Type', 'application/json');
        if (!error && res.statusCode == 200) {
            res.send(JSON.stringify({
                "$class": "org.example.biznet.MedicalRecord",
                "patientId": "pp1",
                "firstName": patient.name,
                "lastName": patient.lastName
            }));

            // {
            //     "$class": "org.example.biznet.MedicalRecord",
            //     "recordId": "r1",
            //     "description": "desc",
            //     "cancerType": "skin",
            //     "medicalHistory": "history",
            //     "buyers": [],
            //     "patientIdd": "string",
            //     "hospitalIdd": "string"
            //   }
            //res.send(body);
        }
    });
});

module.exports = router;