const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthorSchema = new Schema(
  {
    name: {
      type: String,
      minlength: [3, 'More than 3 characters needed'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Author', AuthorSchema);
