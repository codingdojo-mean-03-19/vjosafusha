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
  Sloth.find({})
    .then(sloths => res.render('index', { sloths: sloths }))
    .catch(console.log);
});

app.get('/new', function(req, res) {
  res.render('new');
});

app.post('/add', function(req, res) {
  var sloth = new Sloth(req.body);
  sloth.save(function(err) {
    if (err) {
      console.log(err);
    }
    res.redirect('/');
  });
});

app.get('/mongooses/:id', function(req, res) {
  Sloth.find({ _id: req.params.id }, function(err, sloth) {
    if (err) {
      console.log(err);
    }
    res.render('show_one', { sloth: sloth[0] });
  });
});

app.get('/mongooses/edit/:id', function(req, res) {
  Sloth.find({ _id: req.params.id })
    .then(sloth => {
      console.log(sloth);
      res.render('edit', { sloth: sloth[0] });
    })
    .catch(console.log);
});

app.post('/mongooses/:id', function(req, res) {
  console.log('body', req.body);
  Sloth.update({ _id: req.params.id }, req.body)
    .then(sloth => {
      console.log(sloth);
      res.redirect('/');
    })
    .catch(console.log);
});

app.get('/delete/:id', function(req, res) {
  var id = req.params.id;
  Sloth.remove({ _id: id })
    .then(sloth => {
      console.log(sloth);
      res.redirect('/');
    })
    .catch(console.log);
});
