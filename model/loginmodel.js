var mongoose = require('mongoose');

//schema
var userschema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    }
});

//model
module.exports = mongoose.model('user',userschema);