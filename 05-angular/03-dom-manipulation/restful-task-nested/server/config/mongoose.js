const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const modelsPath = path.resolve('server', 'models');

mongoose.connect('mongodb://localhost/task-restful-db', {
  useCreateIndex: true,
  useNewUrlParser: true,
});

mongoose.connection.on('connection', () => console.log('Connected to mongoDB'));

fs.readdirSync(modelsPath)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(modelsPath, file)));
