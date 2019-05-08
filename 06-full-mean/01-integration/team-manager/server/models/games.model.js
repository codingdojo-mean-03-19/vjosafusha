const mongoose = require('mongoose');
const { Schema } = mongoose;

const GameSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Game', GameSchema);
