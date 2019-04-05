var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

const port = 3000;
server = app.listen(port, () =>
  console.log(`Server listening on port ${port}!`)
);
const io = require('socket.io')(server);

app.set(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

var counter = 0;

io.on('connection', function(socket) {
  socket.on('push_counter', function(data) {
    console.log(data.msg);
    counter++;
    io.emit('updated_counter', { msg: counter });
  });
  socket.on('reset_counter', function(data) {
    console.log(data.msg);
    counter = 0;
    io.emit('updated_counter', { msg: counter });
  });
});
