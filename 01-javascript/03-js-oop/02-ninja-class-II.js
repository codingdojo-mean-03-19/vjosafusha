// Create a new object constructor called Ninja with the following attributes:

// name, health, speed (private), strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

// Ninja should have the following methods:
// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 Health to the Ninja

// -----------------------------------------------------------------------------------------
// Assignment: Ninja Class II
// Complete the below challenges using Ninja from the previous assignment.

// .punch()
// Add a new method to Ninja called .punch(). 
// This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in. 
// .kick()
// Now add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each
// point of Strength the calling Ninja has, and  .punch() will take another Ninja instance.

function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    //Getters for Speed and Strength
    this.getSpeed = function () {
        return speed;
    }
    this.getStrength = function () {
        return strength;
    }

    Ninja.prototype.sayName = function () {
        console.log('Hi my name is', this.name);
        return this;
    }

    Ninja.prototype.showStats = function () {
        console.log('Name: ' + this.name + ', Health: ' + this.health + ', Speed: ' + this.getSpeed() + ', Strength: ' + this.getStrength());
        return this;
    }

    Ninja.prototype.drinkSake = function () {
        this.health += 10;
        return this;
    }

    Ninja.prototype.punch = function (ninja) {
        if (ninja instanceof Ninja){
            ninja.health -= 5
            console.log(ninja.name + ' was punched by ' + this.name + ' and lost 5 Health!');
        }
        else {
            console.log('ERROR')
        }
        return this
    }

    this.kick = function (ninja) {
        const lost = strength * 5;
        ninja.health -= lost;
        console.log(ninja.name + " was kicked by " + this.name + " and lost " + lost + " Health.");
        return this;
    }

}

var ninja = new Ninja("Coding");
var Ninja2 = new Ninja('Dojo');
ninja.punch(Ninja2);
Ninja2.showStats();
ninja.kick(Ninja2);
Ninja2.showStats();