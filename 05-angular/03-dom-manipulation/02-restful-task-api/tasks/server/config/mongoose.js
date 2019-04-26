const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

const modelPath = path.resolve('server', 'models');

mongoose.connect('mongodb://localhost/tasks_database', {
  useCreateIndex: true,
  userNewUrlParser: true,
});

mongoose.connection.on('connection', () => console.log('Connected to MongoDB'));

fs.readdirSync(modelPath)
  .filter(file => file.endsWith('.js'))
  .forEach(file => require(path.join(modelPath, file)));
