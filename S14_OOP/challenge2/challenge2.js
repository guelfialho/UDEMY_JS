'use strict';

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  acceletare() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} Km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} Km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speedUs) {
    this.speed = speedUs * 1.6;
  }
}

const ford = new CarCl('ford', 120);

console.log(ford);
