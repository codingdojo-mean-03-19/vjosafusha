
//---------------------1---------------------------
console.log(hello);                                   
var hello = 'world';  
//interpreter 
// var hello;
// console.log(hello)
// hello = 'world'        


//---------------------2---------------------------
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//interpreter
// var needle 
// function test(){
//     var needle;
//     needle = 'magnet';
//     console.log(needle);
// }
// needle = 'haystack';
// test();//magnet

//---------------------3---------------------------
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan); //super cool

//interpreter
// var brendan
// function print(){
//     brendan = 'only okay';
//     console.log(brendan)
// }
// brendan = 'super cool'
// console.log(brendan)//super cool


//---------------------4---------------------------
var food = 'chicken';
console.log(food);//chicken
eat();//half-chicken
function eat(){
	food = 'half-chicken';
	console.log(food);
	var food = 'gone';
}

//interpreter
// var food 
// function eat (){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// food = 'chicken';
// console.log(food)
// eat()

//---------------------5---------------------------
mean();//error
console.log(food);
var mean = function() {
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);

//interpreter
// var mean 
// mean()
// mean = function(){
//     var food 
//     food = 'chicken';
//     console.log(food)
//     food = 'fish';
//     console.log();
// }
// console.log(food)
// console.log(food)


//---------------------6---------------------------
console.log(genre);//undefined
var genre = "disco";
rewind();
function rewind() {
	genre = "rock";
	console.log(genre);//rock
	var genre = "r&b";
	console.log(genre);//r&b
}
console.log(genre);//disco

//interpreter
// console.log(genre)
// var genre
// genre = 'disco';
// function rewind() {
//     var genre
// 	genre = "rock";
// 	console.log(genre);
// 	genre = "r&b";
// 	console.log(genre);
// }
// rewind()
// console.log(genre)


//---------------------7---------------------------
dojo = "san jose";
console.log(dojo); //san jose
learn();
function learn() {
	dojo = "seattle"; 
	console.log(dojo); //seattle
	var dojo = "burbank"; 
	console.log(dojo); //burbank
}
console.log(dojo); //san jose


//---------------------8---------------------------
console.log(makeDojocopy("Chicago", 65)); //makeDojocopy not defined
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
        const dojo = {};
        dojo.name = name;
        dojo.students = students;
        if(dojo.students > 50){
            dojo.hiring = true;
        }
        else if(dojo.students <= 0){
            dojo = "closed for now";
        }
        return dojo;
}