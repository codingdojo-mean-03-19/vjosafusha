var express = require("express");

var app = express();

app.listen(8000, function(){
    console.log("Listening on port 8000")
})

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get("/cat", function(request, response) {
	response.render('cat')
})

app.get("/car", function(request, response) {
	response.render('car')
})

app.get("/cat/new", function(request, response) {
	response.render('form')
})