var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  path = require('path'),
  session = require('express-session'),
  port = 8000,
  mongoose = require('mongoose'),
  flash = require('express-flash');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
app.use(flash());
app.use(
  session({
    secret: 'abcdefghijklmnop',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

mongoose.connect('mongodb://localhost/quoting_user');
mongoose.Promise = global.Promise;

var UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 6 },
    quote: { type: String, required: true, minlength: 6 },
  },
  { timestamps: true }
);

mongoose.model('User', UserSchema);

var routes = require('./server/config/routes.js')(app);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
