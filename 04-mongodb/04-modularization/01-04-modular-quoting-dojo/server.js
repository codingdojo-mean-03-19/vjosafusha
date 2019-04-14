var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var session = require('express-session');

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/quoting_user');
mongoose.Promise = global.Promise;

app.use(
  session({
    secret: 'abcdefghijklmnop',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  })
);

const flash = require('express-flash');
app.use(flash());

app.get('/', function(req, res) {
  res.render('index');
});

var UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, minlength: 6 },
    quote: { type: String, required: true, minlength: 6 },
  },
  { timestamps: true }
);

mongoose.model('User', UserSchema);

var routes =require('./server/config/routes.js')(app);

app.listen(port, () => console.log(`Server listening on port ${port}!`));
