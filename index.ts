//@ts-check 

class Vehicle {
  status: string = "stopped";
  make: string;
  model: string;
  wheels: number;


  constructor(make: string, model: string, wheels: number) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }
  start() {
    this.status = "started";
  }
  stop() {
    this.status = "stopped";
  }
}

class Car extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 4);
  }
}

class MotorCycle extends Vehicle {
  constructor(make: string, model: string) {
    super(make, model, 2);
  }
}

function printStatus(vehicle: Vehicle) {
  if (vehicle.status === "started") {
    console.log("The vehicle is running.");
  } else {
    console.log("The vehicle is stopped.");
  }
}

const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
myHarley.start();
printStatus(myHarley);
console.log(myHarley.make);

const myBuick = new Car("Buick", "Regal");
// myBuick.wheels = myBuick.wheels - 1;
// console.log(myBuick.wheels);
console.log(myBuick.wheels);

//part3

class NCycle<T> {
  make: T | T[];
  model: T | T[];

  constructor(make: T | T[], model: T | T[]) {
    this.make = make;
    this.model = model;
  }
  print(parameter?: number): void {
    if (!Array.isArray(this.make) && !Array.isArray(this.model)) {
      console.log(`This is a ${this.make} ${this.model} NCycle.`)
    } else if (Array.isArray(this.make) && Array.isArray(this.model) && typeof parameter === 'number' && parameter >= 0 && parameter < this.make.length && parameter < this.model.length) {
      console.log(`This NCycle has a ${this.make[parameter]} ${this.model[parameter]} at ${parameter}.`);
    } else {
      console.log("This NCycle was not created properly.");
    }
  }
}