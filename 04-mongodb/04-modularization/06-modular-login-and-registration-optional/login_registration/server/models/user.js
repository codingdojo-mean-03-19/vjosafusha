var mongoose = require("../config/mongoose")

var UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: "You must enter your first name.",
        minlength: [3, "Your first name must be longer than 3 characters."]
    },
    last_name: {
        type: String,
        required: "You must enter your last name.",
        minlength: [3, "Your last name must be longer than 3 characters."]
    },
    email: {
        type: String,
        required: "You must enter an email address.",
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address"
        ],
        unique: "Email address is already in the database."
    },
    password: { type: String, required: "You must enter a password" },
    birthday: { type: Date, required: "You must enter a birthday" }
});

module.exports = mongoose.model("User", UserSchema);
 