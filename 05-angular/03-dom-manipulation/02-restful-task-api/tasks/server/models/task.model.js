const mongoose = require('mongoose');
const { Schema } = mongoose;

// title: (string)
// description: (string, default to empty string)
// completed: (boolean, default to: false)
const TaskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: [2, 'More than 2 character needed'],
    },

    description: {
      type: String,
      minlength: [5, 'More than 5 characters needed for description'],
    },

    completed: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Task', TaskSchema);
