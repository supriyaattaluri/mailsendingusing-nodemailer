module.exports = function(mongoose) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var userSchema = new Schema({

        Name: String,
        Adress: String,
        phoneNumber: Number,
        email: String,
        Role: String,
        text:String,
        subject:String
    });
    var User = mongoose.model('User', userSchema);
    return User;
}
