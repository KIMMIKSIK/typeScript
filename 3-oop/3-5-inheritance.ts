{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface ICoffeeMachine {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMaker implements ICoffeeMachine {
    private static BEANS_GRAMM_PER_SHOT = 7;
    protected coffeeBeans = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }
    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough beans");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
    }
    private preheat(): void {
      console.log("heating up...🔥");
    }
    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);
      return { shots, hasMilk: false };
    }
    clean(): void {
      console.log("cleaning the machine..🛸");
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  const maker: CoffeeMaker = CoffeeMaker.makeMachine(32);

  class CaffeeLatteMachine extends CoffeeMaker {
    // 만약자식에서 constructor를 따로 구성하는 경우 꼭 먼저 super()를 호출해야한다.
    constructor(beans: number, public readonly serialNumber: string) {
      super(beans);
    }
    private steamMilk(): void {
      console.log("steaming some milk....");
    }
    makeCoffee(shots: number): CoffeeCup {
      //super키워드를 사용한 부모클래스의 접근
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return { ...coffee, hasMilk: true };
    }
  }

  const machine = CoffeeMaker.makeMachine(23);
  const latteMachine = new CaffeeLatteMachine(23, "SSSS");
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee);
  console.log(latteMachine.serialNumber);
}
