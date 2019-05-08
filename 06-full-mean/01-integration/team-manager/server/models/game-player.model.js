const mongoose = require('mongoose');
const { Schema } = mongoose;

const GamePlayerSchema = new Schema({
  player: { type: Schema.Types.ObjectId, ref: 'Player' },
  game: { type: Schema.Types.ObjectId, ref: 'Game' },
  status: {
    type: String,
    trim: true,
    default: 'Undecided',
  },
});

module.exports = mongoose.model('GamePlayer', GamePlayerSchema);
