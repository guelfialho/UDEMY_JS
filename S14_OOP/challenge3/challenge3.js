'use strict';

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} Km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} Km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype); // linking prototypes

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(`The battery was charge to ${chargeTo}%`);
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    ` Now ${this.make} is going at ${this.speed} Km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);

console.log(
  `${tesla.make} is going at ${tesla.speed} Km/h, with a charge of ${tesla.charge}%`
);
