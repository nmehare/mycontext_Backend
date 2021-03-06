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
            return res.status(400).json({
                message: 'No Record Found'
            });
            // throw new Error('No record found.');
            //console.log(doc);
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
            //return res.json({
            console.log("User inserted");
            //}).status(200);
        }
    });

    console.log(id);

    var name = req.body.name;
    var email = req.body.email;
    var address = req.body.address;
    var phone = req.body.contact;

    if (user.usertype == "patient") {
        var patient = new Patient();
        var patientId = patient._id;
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
                request.post({
                    headers: {
                        "content-type": "application/json"
                    },
                    url: blockchainConfig.url + "/org.example.biznet.Patient",
                    body: JSON.stringify({
                        $class: "org.example.biznet.Patient",
                        "patientId": patientId,
                        "name": req.body.name,
                        "bloodtype": req.body.bloodtype,
                        "cancertype": req.body.cancertype,
                        "contactnumber": req.body.contact,
                        "email": req.body.email
                    })
                }, (error, response, body) => {
                    if (error) {
                        console.log("Patient Insertion FAILED To Blockchain.");
                        // res.json({
                        success: false
                        // message: "record failed."
                        //});
                    }
                    // res.json({
                    success: true
                    console.log("Patient Added To Blockchain successfully.")
                    //   message: "Patient Added To Blockchain successfully."
                    //});
                });
                return res.json({
                    message: "patient inserted"
                }).status(200);
            }
        });
    } else if (user.usertype == "hospital") {
        var hospital = new Hospital();
        var hospitalId = hospital._id;
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

                request.post({
                    headers: {
                        "content-type": "application/json"
                    },
                    url: blockchainConfig.url + "/org.example.biznet.Hospital",
                    body: JSON.stringify({
                        $class: "org.example.biznet.Hospital",
                        "hospitalId": hospitalId,
                        "name": req.body.name,
                        "address": req.body.address,
                        "abn": req.body.abn
                    })
                }, (error, response, body) => {
                    if (error) {
                        console.log("Hospital Insertion FAILED To Blockchain.");
                        // res.json({
                        success: false
                        // message: "record failed."
                        //});
                    }
                    // res.json({
                    success: true
                    console.log("Hospital Added To Blockchain successfully.")
                    //   message: "Patient Added To Blockchain successfully."
                    //});
                });

                return res.json({
                    message: "hospital inserted"
                }).status(200);
            }
        });
    } else if (user.usertype == "buyer") {
        var buyer = new Buyer();
        var buyerId = buyer._id;
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

                request.post({
                    headers: {
                        "content-type": "application/json"
                    },
                    url: blockchainConfig.url + "/org.example.biznet.Buyer",
                    body: JSON.stringify({
                        $class: "org.example.biznet.Buyer",
                        "buyerId": buyerId,
                        "name": req.body.name,
                        "abn": req.body.abn
                    })
                }, (error, response, body) => {
                    if (error) {
                        console.log("buyer Insertion FAILED To Blockchain.");
                        // res.json({
                        success: false
                        // message: "record failed."
                        //});
                    }
                    // res.json({
                    success: true
                    console.log("buyer Added To Blockchain successfully.")
                    //   message: "Patient Added To Blockchain successfully."
                    //});
                });

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
    report.find().populate('patient').populate('hospital').exec(function (err, response) {
        if (err) {
            return next(err);
        } else {
            console.log(response);
            return res.send(response);
        }
    });

    // report.find(function (err, reportDetails) {
    //     if (err) {
    //         return next(err);
    //     }
    //     res.json(reportDetails);
    // });
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

    console.log("inside getallreportsbybuyer method");
    agreement.find({
        buyer: req.param("buyerid"),
        status: "Accepted"
    }, function (err, agreementDetails) {
        if (err) {
            return next(err);
        } else {
            reportarray = [];
            getreport(res, agreementDetails, 0);
            //    for(var i=0,len=agreementDetails.length;i<len;i++){
            // console.log(agreementDetails[i].report);
            // await report.findOne(
            //     {_id: agreementDetails[i].report}
            //     ,  function (err, reportDetails) {
            //      if (err) {
            //         return next(err);
            //     }else{
            //         console.log(reportDetails);
            //         reportarray.push(reportDetails);


            //     }

            // });
            // if(reportarray.length==len){
            //     console.log("inside");
            //     callback(res,reportarray);
            // }
        }
        // agreementDetails.forEach( function(agreementDetails){
        //     console.log(agreementDetails.report);
        //     report.findOne(
        //         {_id: agreementDetails.report}
        //         ,function (err, reportDetails) {
        //         if (err) {
        //             return next(err);
        //         }else{
        //             console.log(reportDetails);
        //             reportarray.push(reportDetails);
        //             console.log(reportarray);
        //         }

        //     });

        //  });



    });
});
var reportarray = [];

async function getreport(res, agreementDetails, i) {

    try {
        console.log(agreementDetails[i].report);


        // report.find().populate('patient').populate('hospital').exec(function (err, response) {
        //     if (err) {
        //         return next(err);
        //     } else {
        //         console.log(response);
        //         return res.send(response);
        //     }
        // });

        await report.findOne({
            _id: agreementDetails[i].report
        }).populate('patient').populate('hospital').exec(function (err, reportDetails) {
            if (err) {
                return next(err);
            } else {
                console.log(reportDetails);
                if (reportDetails != null)
                    reportarray.push(reportDetails);
            }
            getreport(res, agreementDetails, i + 1);
        });
    } catch (e) {
        callback(res, reportarray);
    }
}

function callback(res, reportarray) {
    console.log(reportarray);
    res.send(reportarray);
    console.log("xzczc");
}


// get all medical reports details filtered by buyer from database
router.get('/getagreementbypatient/:patientid', function (req, res, next) {
    console.log("inside getallreportsbypatient method" + req.param("patientid"));
    console.log(req.param("patientid"));
    report.find({
        patient: req.param("patientid")
    }, function (err, reportDetails) {
        if (err) {
            return next(err);
        } else {
            array = [];
            console.log(reportDetails);
            // console.log("__________________");
            getPatientData(res, reportDetails, 0);
        }
    });
});

var patientarray = [];
async function getPatientData(res, reportDetails, i) {
    var allPatientAgreement = [];
    try {
        for (let i = 0; i < reportDetails.length; i++) {

        }
        //console.log("report iddddd"+reportDetails[i]._id);
        await agreement.find({
            report: reportDetails[i]._id
        }).populate('buyer').populate('report').exec(function (err, agreementDetails) {
            if (err) {
                return next(err);
            } else {
                //console.log(agreementDetails);
                if (agreementDetails != null) {
                    for (let x = 0; x < agreementDetails.length; x++)
                        patientarray.push(agreementDetails[x]);
                }
                //patientarray.push(agreementDetails);
            }
            getPatientData(res, reportDetails, i + 1);
        });
    } catch (e) {
        callback(res, patientarray);
        patientarray.length = 0;
    }
}

function callback(res, patientarray) {

    //console.log(patientarray);
    res.send(patientarray);
    //console.log("xzczc");
}


// parag get all medical reports details filtered by buyer from database
router.get('/getMedicalTransaction/:buyerid', function (req, res, next) {
    console.log("inside getallreportsbypatient method" + req.param("buyerid"));
    console.log(req.param("buyerid"));
    report.find({
        //patient: req.param("buyerid")
    }).populate('patient').populate('hospital').exec(function (err, reportDetails) {
        if (err) {
            return next(err);
        } else {
            array = [];
            //console.log(reportDetails);
            // console.log("__________________");
            getBuyeragreementData(res, reportDetails, req.param("buyerid"));
        }
    });
});


async function getBuyeragreementData(res, reportDetails, buyerId) {
    var allTransaction = [];
    var dontwant = [];
    var matchedRecords = [];
    var z = 0;
    console.log(buyerId);
    try {

        //console.log("report iddddd"+reportDetails[i]._id);
        await agreement.find({
            buyer: buyerId
        }).populate('buyer').populate('report').exec(function (err, allBuyerAgreement) {
            if (err) {
                return next(err);
            } else {
                //console.log(agreementDetails);
                if (allBuyerAgreement != null) {

                    console.log("agreement total" + allBuyerAgreement.length);
                    console.log("report total" + reportDetails.length);
                    for (let x = 0; x < allBuyerAgreement.length; x++) {
                        for (let y = 0; y < reportDetails.length; y++) {
                            console.log("agreement report id " + allBuyerAgreement[x].report._id);
                            console.log("report id" + reportDetails[y]._id);
                            if (allBuyerAgreement[x].report._id.toString().trim() == reportDetails[y]._id.toString().trim()) {
                                console.log("MATCH!!!!!");
                                matchedRecords.push(reportDetails[y]);
                            } else {
                                console.log("MATCH NOT FOUND!!!!!");

                                // if (z == 0) {
                                //     dontwant.push(reportDetails[y]);
                                //     console.log(dontwant.length);
                                //     console.log("not in array-ADD first element");
                                //     z++;
                                // } else if (z >= 1) {
                                //     //for (let z = 0; z < dontwant.length; z++) {
                                //     if (dontwant.includes(reportDetails[y])) {
                                //         console.log("already in array//////////");
                                //     } else {
                                //         dontwant.push(reportDetails[y]);
                                //         console.log("not in array");
                                //         z++;
                                //     }
                                // }




                            }
                        }
                    }
                }
            }
            //console.log(dontwant.length);
            console.log(matchedRecords.length);
            allTransaction = reportDetails.filter((item) => !matchedRecords.includes(item));
            console.log(allTransaction.length)
            // console.log("Remaining reports: "+allTransaction.length);
            callback1(res, allTransaction);
            allTransaction.length = 0;
            //getBuyeragreementData(res, reportDetails,buyerId);
        });
    } catch (e) {
        callback1(res, allTransaction);
        allTransaction.length = 0;
    }
}

function callback1(res, allTransaction) {

    //console.log(patientarray);
    res.send(allTransaction);
    //console.log("xzczc");
}



router.put('/updatereport1/:reportid', (req, res) => {
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
            request.put({
                headers: {
                    "content-type": "application/json"
                },
                url: blockchainConfig.url + "/org.example.biznet.MedicalRecord/" + req.param("reportid"),
                body: JSON.stringify({
                    $class: "org.example.biznet.MedicalRecord",
                    "description": req.body.diagnosis,
                    "cancerType": req.body.cancertype,
                    "medicalHistory": req.body.reporttype,
                    "patientIdd": req.body.patient,
                    "hospitalIdd": req.body.hospital,
                    "buyers": req.body.buyers
                })
            }, (error, response, body) => {
                if (error) {
                    console.log("MedicalRecord update FAILED To Blockchain.");
                    // res.json({
                    success: false
                    // message: "record failed."
                    //});
                }
                // res.json({
                success: true
                console.log("MedicalRecord updated IN  Blockchain successfully.")
                //   message: "Patient Added To Blockchain successfully."
                //});
            });


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

router.post('/logout', function (req, res) {
    console.log(req.body.username);
    if (!req.body.username) {
        return res.status(400).json({
            message: 'Please provide name'
        });
    }

    user.findOne({
        'username': req.body.username
    }).then(function (doc) {
        if (!doc) {
            throw new Error('No record found.');
            console.log(doc);
        } else {
            const user = {
                _id: doc._id,
                name: doc.name,
                email: doc.email
            };
            const refreshToken = jwt.sign(user, config.myprivatekey, {
                expiresIn: 0
            });
            res.json({
                "message": "Logout"
            });
        }
    })
});


async function getbuyerdetails(id,reportid,req,res){
 
    console.log("inside getbuyer")
     await buyer.findOne({
         _id: id,
         
     }, function (err, buyerDetails) {
         if (err) {
            console.log(err)
         } else {
             console.log("buyer detailsssssssssssssssssssss"+buyerDetails)
             getmedicaldetails(reportid,req,buyerDetails,res);
         }
     });
 }
array = [];
async function getmedicaldetails(reportid, req, buyerDetails, res) {
    request(blockchainConfig.url + '/org.example.biznet.MedicalRecord/' + reportid, function (error, response, body) {
        console.log("inside getmedicalreport 111")
        if (!error && response.statusCode == 200) {
            console.log("inside getmedicalreport")
            jbody = JSON.parse(body)
            console.log(jbody.patientIdd)


            vararray = jbody.buyers;
            console.log(reportid)
            array.push({
                $class: "org.example.biznet.Buyer",
                "buyerId": req.body.buyer,
                "name": buyerDetails.name
            })

            console.log(array)



            request.put({
                headers: {
                    "content-type": "application/json"
                },
                url: blockchainConfig.url + "/org.example.biznet.MedicalRecord/" + reportid,

                body: JSON.stringify({
                    $class: "org.example.biznet.MedicalRecord",
                    "description": "sdfsf",
                    "cancerType": body.cancertype,
                    "medicalHistory": body.reporttype,
                    "buyers": array,
                    "patientIdd": body.patient,
                    "hospitalIdd": body.hospital

                })
            }, (error, response, body) => {
                if (error) {
                    console.log("MedicalRecord update FAILED To Blockchain.");
                    // res.json({
                    success: false
                    // message: "record failed."
                    //});
                }
                // res.json({
                success: true
                console.log("MedicalRecord updated IN  Blockchain successfully.")
                //   message: "Patient Added To Blockchain successfully."
                //});
            });
            res.send({
                message: "agreement updated"
            }).status(200);
        }
    });

}


//Only status should be updated from agreement record
router.put('/updateagreement/:agreementid', (req, res) => {
    console.log(report._id);
    varreportId = report._id;
    if (!req.body.buyer || !req.body.report) {
        returnres.status(400).json({
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

            getbuyerdetails(req.body.buyer, req.body.report, req, res);

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
    }).populate([{
        path: 'report',
        populate: {
            path: 'patient'
        }
    }]).populate([{
        path: 'report',
        populate: {
            path: 'hospital'
        }
    }]).exec(function (err, agreementDetails) {
        if (err) {
            return next(err);
        } else {
            console.log(agreementDetails);
            return res.send(agreementDetails);
        }
    });
});


router.post('/createbuyer', (req, res, next) => {
    console.log("Inside create hospital functionnn");
    if (!req.body.name) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }
    var buyer = new Buyer(req.body);
    var buyerId = buyer._id;
    buyer.save(function (err, data) {
        if (err) {
            res
                .status(400)
                .send({
                    message: "error"
                });
        } else {
            console.log("inside elseeeeeeee create hospital block");

            request.post({
                headers: {
                    "content-type": "application/json"
                },
                url: blockchainConfig.url + "/org.example.biznet.Buyer",
                body: JSON.stringify({
                    $class: "org.example.biznet.Buyer",
                    "buyerId": buyerId,
                    "name": req.body.name,
                    "abn": req.body.abn
                })
            }, (error, response, body) => {
                if (error) {
                    console.log("buyer Insertion FAILED To Blockchain.");
                    // res.json({
                    success: false
                    // message: "record failed."
                    //});
                }
                // res.json({
                success: true
                console.log("buyer Added To Blockchain successfully.")
                //   message: "Patient Added To Blockchain successfully."
                //});
            });

            res.send({
                message: "buyer created"
            }).status(200);
        }
    });
});

router.post('/createhospital', (req, res, next) => {
    console.log("Inside create hospital functionnn");
    if (!req.body.name) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }
    var hospital = new Hospital(req.body);
    var hospitalId = hospital._id;
    hospital.save(function (err, data) {
        if (err) {
            res
                .status(400)
                .send({
                    message: "error"
                });
        } else {
            console.log("inside elseeeeeeee create hospital block");

            request.post({
                headers: {
                    "content-type": "application/json"
                },
                url: blockchainConfig.url + "/org.example.biznet.Hospital",
                body: JSON.stringify({
                    $class: "org.example.biznet.Hospital",
                    "hospitalId": hospitalId,
                    "name": req.body.name,
                    "address": req.body.address,
                    "abn": req.body.abn
                })
            }, (error, response, body) => {
                if (error) {
                    console.log("Hospital Insertion FAILED To Blockchain.");
                    // res.json({
                    success: false
                    // message: "record failed."
                    //});
                }
                // res.json({
                success: true
                console.log("Hospital Added To Blockchain successfully.")
                //   message: "Patient Added To Blockchain successfully."
                //});
            });

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
    var recordId = report._id;
    report.save(function (err, data) {
        if (err) {
            res
                .status(400)
                .send({
                    message: "error"
                });
        } else {
            console.log("inside elseeeeeeee create report block");
            request.post({
                headers: {
                    "content-type": "application/json"
                },
                url: blockchainConfig.url + "/org.example.biznet.MedicalRecord",
                body: JSON.stringify({
                    $class: "org.example.biznet.MedicalRecord",
                    "recordId": recordId,
                    "description": req.body.diagnosis,
                    "cancerType": req.body.cancertype,
                    "medicalHistory": req.body.reporttype,
                    "patientIdd": req.body.patient,
                    "hospitalIdd": req.body.hospital
                })
            }, (error, response, body) => {
                if (error) {
                    console.log("MedicalRecord Insertion FAILED To Blockchain.");
                    // res.json({
                    success: false
                    // message: "record failed."
                    //});
                }
                // res.json({
                success: true
                console.log("MedicalRecord Added To Blockchain successfully.")
                //   message: "Patient Added To Blockchain successfully."
                //});
            });

            console.log(data);
            res.send({
                message: "report created"
            }).status(200);
        }
    });
});



router.post('/createpatient', (req, res, next) => {
    console.log("Inside create patient functionnn");
    console.log(req.body.firstName);
    if (!req.body.name) {
        return res.status(400).json({
            message: 'Please fill out all fields'
        });
    }
    var patient = new Patient(req.body);
    var id = patient._id;
    patient.save(function (err, data) {
        if (err) {
            res
                .status(400)
                .send({
                    message: "error"
                });
        } else {
            console.log("inside elseeeeeeee create patient block" + id);
            request.post({
                headers: {
                    "content-type": "application/json"
                },
                url: blockchainConfig.url + "/org.example.biznet.Patient",
                body: JSON.stringify({
                    $class: "org.example.biznet.Patient",
                    "patientId": id,
                    "name": req.body.name,
                    "bloodtype": req.body.bloodtype,
                    "cancertype": req.body.cancertype,
                    "contactnumber": req.body.contact,
                    "email": req.body.email
                })
            }, (error, response, body) => {
                if (error) {
                    console.log("Patient Insertion FAILED To Blockchain.");
                    // res.json({
                    success: false
                    // message: "record failed."
                    //});
                }
                // res.json({
                success: true
                console.log("Patient Added To Blockchain successfully.")
                //   message: "Patient Added To Blockchain successfully."
                //});
            });

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
    }).populate('hospital').populate('patient').exec(function (err, hospitaldetails) {
        if (err) {
            return next(err);
        } else {
            console.log(hospitaldetails);
            return res.send(hospitaldetails);
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
router.get('/getAllReportsNoAgreement/:buyerId', function (req, res, next) {
    console.log("inside getallreportsbybuyerId method");
    report.find({
        buyer: null
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
    }).populate('hospital').exec(function (err, reportdetails) {
        if (err) {
            return next(err);
        } else {
            console.log(reportdetails);
            return res.send(reportdetails);
        }
    });
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
    request.post({
        headers: {
            "content-type": "application/json"
        },
        url: blockchainConfig.url + "/org.example.biznet.Patient",
        body: JSON.stringify({
            $class: "org.example.biznet.Patient",
            "patientId": "pp4",
            "name": "tstpa3tient",
            "bloodtype": "blood3type",
            "cancertype": "s3kin",
            "contactnumber": "344345",
            "email": "test@gma3il.com"
        })
    }, (error, response, body) => {
        if (error) {
            res.json({
                success: false,
                message: "record failed."
            });
        }
        res.json({
            success: true,
            message: "Patient Added To Blockchain successfully."
        });
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
        }
    });
});

router.post('/blockchainapi/updatereport1', (req, res, next) => {
    request.put({
        headers: {
            "content-type": "application/json"
        },
        url: blockchainConfig.url + "/org.example.biznet.Patient",
        body: JSON.stringify({
            $class: "org.example.biznet.Patient",
            "patientId": "pp4",
            "name": "tstpa3tient",
            "bloodtype": "blood3type",
            "cancertype": "s3kin",
            "contactnumber": "344345",
            "email": "test@gma3il.com"
        })
    }, (error, response, body) => {
        if (error) {
            res.json({
                success: false,
                message: "record failed."
            });
        }
        res.json({
            success: true,
            message: "Patient Added To Blockchain successfully."
        });
    });
});


module.exports = router;