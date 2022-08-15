"use strict";
class Car1 {
    constructor() {
        this.engine = 0;
    }
    move() {
        const engine = this.engine + 1;
        console.log(engine);
        console.log("engine");
    }
}
const car1 = new Car1();
car1.move();
//# sourceMappingURL=main.js.map