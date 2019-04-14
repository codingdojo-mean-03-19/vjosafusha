var mongoose = require("../config/mongoose")

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "Your first name must be longer than 3 characters."]
    }}, {
        timestamps: true
    }
);

module.exports = mongoose.model("User", UserSchema);
