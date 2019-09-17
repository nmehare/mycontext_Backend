const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    usertype: {
        type: String
    },
    password: {
        type: String,
        required: true,
        unique: true
    }
    // phone: {
    //     type: Number
    // },
    // email: {
    //     type: String,
    // },
    // address: {
    //     type: String
    // },
    // dob: {
    //     type: Date
    // },
    // gender: {
    //     type: String
    // },
    // name: {
    //     type: String
    // },
    // abn: {
    //     type: String
    // },
    // bloodtype: {
    //     type: String
    // }
});

module.exports = mongoose.model('User', UserSchema);