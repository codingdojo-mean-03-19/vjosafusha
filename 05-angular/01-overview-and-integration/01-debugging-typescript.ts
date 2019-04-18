var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?

//One solution is asigning 9 as a string. Also, changing the return value from String to number. 
myString = "9";

//Other solution might be changing the return value as any
myString = "Asign something else instead of 9 as a number";
console.log(myString);

//  ________________________________________________________________


function sayHello(name: string) {
    return `Hello, ${name}!`;
}
// This is working great:
console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"

//Because 9 is not a string, 9 is a number. 
//  Therefore, we can put 9 into parentheses to represent it as a number, or we could put the return value as number.
console.log(sayHello("9"));
//  or
console.log(sayHello("String Name"))

//  ________________________________________________________________


function fullName(firstName: string, lastName: string, middleName?: string) {
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));
//We can just as a ? in the end of declatraton 


//  ________________________________________________________________


interface Student {
    firstName: string;
    lastName: string;
    belts: number;
}
function graduate(ninja: Student) {
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
}
const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4 //change the declaration from "belt" to "belts".
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));


//  ________________________________________________________________


class Ninja {
    fullName: string;
    constructor(
        public firstName: string,
        public lastName: string) {
        this.fullName = `${firstName} ${lastName}`;
    }
    debug() {
        console.log("Console.log() is my friend.")
    }
}
// This is not making an instance of Ninja, for some reason:
const shane = new Ninja("Vjosa", "Fusha"); //adding "new" keyword to make an instance also adding parameteres.
// Since I'm having trouble making an instance of Ninja, I decided to do this:
//  const turing = {
//     fullName: "Alan Turing",
//     firstName: "Alan",
//     lastName: "Turing"
//  }

//solution 
const turing = new Ninja("Alan", "Turing")
// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja) {
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));

//  ________________________________________________________________


var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => x * x;
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x, y) => x * y; //need for bracket
// Nor is this working:
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}

//  ________________________________________________________________

class Elephant {
    constructor(public age: number) { }
    birthday = () =>
        this.age++;
}


const babar = new Elephant(8);
setTimeout(babar.birthday, 1000)
setTimeout(function () {
    console.log(`Babar's age is ${babar.age}.`)
}, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.








