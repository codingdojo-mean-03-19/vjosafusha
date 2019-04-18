var express = require("express");
var app = express();
var mongoose = require("mongoose");
var path = require("path");
var bodyParser = require("body-parser");
var session = require("express-session");
var flash = require("express-flash");
var bcrypt = require("bcrypt");

const port = 8000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(
  session({
    secret: "keyboassshsjasdhardkitteh",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  })
);

mongoose.connect("mongodb://localhost/login");

var UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: "You must enter your first name.",
    minlength: [3, "Your first name must be longer than 3 characters."]
  },
  last_name: {
    type: String,
    required: "You must enter your last name.",
    minlength: [3, "Your last name must be longer than 3 characters."]
  },
  email: {
    type: String,
    required: "You must enter an email address.",
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address"
    ],
    unique: "Email address is already in the database."
  },
  password: { type: String, required: "You must enter a password" },
  birthday: { type: Date, required: "You must enter a birthday" }
});

mongoose.model("User", UserSchema);
mongoose.Promise = global.Promise;
var User = mongoose.model("User");

app.get("/", function (req, res) {
  if (req.session.userid) {
    return res.redirect("/secrets");
  }
  res.render("index");
});

app.post("/", function (req, res) {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);

  var user = new User({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: hash,
    birthday: req.body.birthday
  });

  user.save(function (err) {
    if (err) {
      console.log("We have an error!", err);
      for (var key in err.errors) {
        req.flash("registration", err.errors[key].message);
      }
      res.redirect("/");
    } else {
      req.session.userid = user._id;
      res.redirect("/secrets");
    }
  });
});


app.post("/session", function (req, res) {
  User.findOne({ email: req.body.email }, function (err, user) {
    if (err) {
      return render.json("Fields are empty");
    }

    if (user) {
      console.log("There is a user", user.password);
      var unhash = bcrypt.compareSync(req.body.password, user.password);
      if (unhash) {
        req.session.userid = user._id;
        return res.redirect("/secrets");
      }
    }
    res.redirect("/");
  });
});
app.get("/logout", function (req, res) {
  req.session.destroy();
  res.redirect("/");
});

app.get("/secrets", function (req, res) {
  if (!req.session.userid) {
    res.redirect("/");
  } else {
    res.render("secrets");
  }
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));

