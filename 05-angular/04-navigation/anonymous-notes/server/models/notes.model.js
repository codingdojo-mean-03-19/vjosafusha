const mongoose = require('mongoose');
const { Schema } = mongoose;

const NoteSchema = new Schema(
  {
    note: {
      type: String,
      require: true,
      minlength: [3, 'More than 3 characters needed'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Note', NoteSchema);
