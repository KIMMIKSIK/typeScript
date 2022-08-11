


const x={};
const y={};
console.log(x)
console.log(y)
const array = [];
console.log(array)
console.clear();

function CoffeeMachine(beans) {
    this.beans = beans;
    // this.makeCoffee = shot => {
    //     console.log('making...')
    // }
}

const machine1 = new CoffeeMachine(10);
CoffeeMachine.prototype.makeCoffee = shot =>{
    console.log('making...')
}

const machine2 = new CoffeeMachine(20);

console.log(machine1.makeCoffee(20))
console.log(machine2)

function LatteMachine(milk) {
    this.milk = milk;
}

LatteMachine.prototype = Object.create(CoffeeMachine.prototype)

const latteeMachine = new LatteMachine(123)
console.log(latteeMachine)
latteeMachine.makeCoffee(20)