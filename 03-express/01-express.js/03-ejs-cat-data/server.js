var express = require("express");

var app = express();

app.listen(8000, function(){
    console.log("Listening on port 8000")
})

const data = [
    {name: "Luna", img: "/images/five.jpg",  favorite_food: "Milk", age: 3, sleeping_spots: "Laptop"}, 
    {name: "Abbey", img: "/images/four.jpg", favorite_food: "Fish", age: 1, sleeping_spots: "Bed"}, 
    {name: "Simba", img: "/images/six.jpg", favorite_food: "Pet Food", age: 2, sleeping_spots:"Desk"}, 

];

app.use(express.static(__dirname + "/static"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/cats', function(request, response){
    response.render('index');
});

app.get('/cats/luna', function(request, response){
    response.render('details', {cat:data[0]});
});

app.get('/cats/abbey', function(request, response){
    response.render('details', {cat:data[1]});
});

app.get('/cats/simba', function(request, response){
    response.render('details', {cat:data[2]});
});
