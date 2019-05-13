const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 255,
    },
    content: {
      type: String,
      required: true,
      minlength: 10,
      maxlength: 1024,
    },
    price: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Post', PostSchema);
