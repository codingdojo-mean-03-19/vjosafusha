var mongoose = require("../config/mongoose.js");

const SlothSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            minlength: [3, 'Name of Sloth must be longer than 2 characters.'],
        },
        desc: {
            type: String,
            required: true,
            minlength: [3, 'Description must be longer than 3 characters.'],
        },
        age: { type: Number, required: true },
    },
    { timestamps: true }
);
mongoose.model('Sloth', SlothSchema);

const Sloth = mongoose.model('Sloth');

module.exports = Sloth;