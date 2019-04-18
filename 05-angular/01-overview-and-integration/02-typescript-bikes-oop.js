var Bike = /** @class */ (function () {
    function Bike(prc, max_s) {
        this.price = prc;
        this.max_speed = max_s;
        this.miles = 0;
    }
    // displayInfo() - have this method display the bike's price, maximum speed, and the total miles.
    Bike.prototype.displayInfo = function () {
        console.log("Bike price: " + this.price + " \n\tMaximum Speed: " + this.max_speed + " \n\tTotal miles: " + this.miles);
    };
    // ride() - have it display "Riding" on the screen and increase the total miles ridden by 10
    Bike.prototype.ride = function () {
        console.log('riding +10 miles');
        this.miles += 10;
        return this;
    };
    // reverse() - have it display "Reversing" on the screen and decrease the total miles ridden by 5...
    Bike.prototype.reverse = function () {
        console.log('reversing -5 miles');
        if (this.miles >= 5)
            this.miles -= 5;
        return this;
    };
    return Bike;
}());
var bike = new Bike(1000, 240);
var bike2 = new Bike(3000, 300);
var bike3 = new Bike(1500, 200);
// Have the first instance ride three times, reverse once and have it displayInfo(). 
bike.ride().ride().ride().reverse().displayInfo();
// Have the second instance ride twice, reverse twice and have it displayInfo().
bike2.ride().ride().reverse().reverse().displayInfo();
// Have the third instance reverse three times and displayInfo().
bike3.reverse().reverse().reverse().displayInfo();
