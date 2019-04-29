const mongoose = require('mongoose');
const { Schema } = mongoose;

var TaskSchema = new Schema(
  {
    title: {
      type: String,
      minlength: [3, 'Your title must be longer than 3 characters.'],
    },
    description: { type: String, default: '' },
    completed: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Task', TaskSchema);
