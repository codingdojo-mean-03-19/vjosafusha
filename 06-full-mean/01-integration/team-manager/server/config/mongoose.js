const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const mondelsPath = path.resolve('server', 'models');

mongoose.connect('mongodb://localhost/team-manager-app-db', {
  useCreateIndex: true,
  useNewUrlParser: true,
});

mongoose.connection.on('Connection', () =>
  console.log('connected to mongo db')
);

fs.readdirSync(mondelsPath)
  .filter(file => file.endsWith('.js'))
  .map(file => require(path.join(mondelsPath, file)));
