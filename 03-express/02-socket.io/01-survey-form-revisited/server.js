var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

const port = 3000;
server = app.listen(port, () =>
  console.log(`Example app listening on port ${port}!`)
);
const io = require('socket.io')(server);

app.set(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index');
});

io.on('connection', function(socket) {
  socket.on('posting_form', function(data) {
    var random = Math.floor(Math.random() * 1000) + 1;
    console.log(data.msg);
    var postData = JSON.stringify(data.msg);
    socket.emit('updated_msg', {
      msg:
        'You emitted the following information to the server: ' +
        postData +
        '<br><br>Your lucky number emitted by the server is ' +
        random,
    });
  });
});
