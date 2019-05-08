const mongoose = require('mongoose');
const { Schema } = mongoose;

const PlayerSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, 'Name is required'],
      minlength: [3, 'More than 3 characters needed'],
    },

    position: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Player', PlayerSchema);
