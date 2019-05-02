const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const models_path = path.join(__dirname, '../models');

mongoose.connect('mongodb://localhost/authors-db', {
  useNewUrlParser: true,
});

mongoose.connection.once('connected', () =>
  console.log('Connected to MongoDB')
);

fs.readdirSync(models_path).forEach(function(file) {
  if (file.indexOf('.js') >= 0) {
    require(models_path + '/' + file);
  }
});
