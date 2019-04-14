var express = require("express"),
  app = express(),
  path = require("path"),
  bodyParser = require("body-parser"),
  session = require("express-session"),
  flash = require("express-flash"),
  port = 8000;

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

var routes = require('./server/config/routes')(app);

app.listen(port, () => console.log(`Server listening on port ${port}!`));

