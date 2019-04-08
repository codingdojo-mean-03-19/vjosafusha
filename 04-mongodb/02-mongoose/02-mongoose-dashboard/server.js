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
mongoose.connect('mongodb://localhost/sloth_db');
mongoose.Promise = global.Promise;

app.listen(port, () => console.log(`Server listening on port ${port}!`));

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

app.get('/', function(req, res) {
  arr = Sloth.find({}, function(err, sloths) {
    res.render('index', { arr: sloths });
  });
});

app.get('/new', function(req, res) {
  res.render('new');
});

app.post('/add', function(req, res) {
  console.log(req.body);
  Sloth.create(req.body, function(err) {
    if (err) {
      console.log(err);
    }
    res.redirect('/');
  });
});

app.get('/show/:id', function(req, res) {
  var id = req.params.id;
  Sloth.find({ _id: id }, function(err, sloth) {
    if (err) {
      console.log(err);
    }
    res.render('show_one', { sloth });
  });
});

app.get('/edit/:id', function(req, res) {
  var id = req.params.id;
  sloth = Sloth.find({ _id: id }, function(err) {
    if (err) {
      console.log(err);
    }
    res.render('edit', { sloth });
  });
});

app.post('/edit', function(req, res) {
  var id = req.params.id;
  Sloth.update({ _id: id }, function(err, sloth) {
    if (err) {
      console.log(err);
    }
    res.redirect('/');
  });
});


app.get('/delete/:id', function(req, res) {
  var id = req.params.id;
  Sloth.remove({ _id: id }, function(err, sloth) {
    if (err) {
      console.log(err);
    }
    res.redirect('/');
  });
});
