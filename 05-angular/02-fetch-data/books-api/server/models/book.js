var mongoose = require("mongoose");

var BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Book must have a title"],
        minlength: [3, "Title must be at least 3 characters long! "]
    },
    publication_year: {
        type: Date,
        required: [true, "Books must have a publication year!"],
        default: Date.now
    },
}, { timestamps: true })

var Book = mongoose.model("Book", BookSchema);
module.exports = Book;