var mongoose = require('../config/mongoose')

var UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true, minlength: 6 },
        quote: { type: String, required: true, minlength: 6 },
    },
    { timestamps: true }
);
module.exports = mongoose.model('User', UserSchema);

