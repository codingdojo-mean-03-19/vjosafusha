const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const models_path = path.join(__dirname, '../models');

mongoose.connect("mongodb://localhost/login");

fs.readdirSync(models_path).forEach(function (file) {
    if (file.indexOf('.js') >= 0) {
        require(models_path + '/' + file);
    }
});
module.exports = require('mongoose');