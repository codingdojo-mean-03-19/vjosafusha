// Each author has a first name and a last name, which must each be at least two characters long
// Each author has a country of origin, which must be at least three characters long
// Each author has a birthdate, which must be in the past
// Each author can write many books
// Each book has a title, which must be at least two characters long
// Each book has a publication year, which must be in the past

var mongoose = require("../config/mongoose")
var book = require('../models/book');


var AuthorSchema = new mongoose.Schema({
    first_name: {
        type: String,
        minlength: [2, "Your First Name must be longer than 2 characters."]
    },
    last_name: {
        type: String,
        minlength: [2, "Your Last Name must be longer than 2 characters."]
    },
    country: {
        type: String,
        minlength: [3, "Your country must be longer than 3 characters."]
    },
    birthday: {
        type: Date,
        default: Date.now
    },
    books: [{type: mongoose.Schema.Types.ObjectId, book}]

}, {
        timestamps: true
    }
);

module.exports = mongoose.model("Author", AuthorSchema);
