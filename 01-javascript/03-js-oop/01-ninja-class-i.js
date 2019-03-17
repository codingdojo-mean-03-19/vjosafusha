// Create a new object constructor called Ninja with the following attributes:

// name, health, speed (private), strength (private)
// Speed and strength should be 3 by default. Health should be 100 by default.

// Ninja should have the following methods:
// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 Health to the Ninja

function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    //Getters for Speed and Strength
    this.getSpeed = function(){
        return speed;
    }
    this.getStrength = function(){
        return strength;
    }

    Ninja.prototype.sayName = function () {
        console.log('Hi my name is', this.name);
        return this;
    }

    Ninja.prototype.showStats = function() {
       console.log('Name: ' + this.name + ', Health: ' + this.health + ', Speed: ' + this.getSpeed() + ', Strength: ' + this.getStrength());
        return this;
    }

    Ninja.prototype.drinkSake = function() {
        this.health += 10;
        return this;
    }

}

var ninja = new Ninja("Dojo");
ninja.sayName();
//100
ninja.showStats();
//110
ninja.drinkSake().showStats();
//120
ninja.drinkSake().showStats();
