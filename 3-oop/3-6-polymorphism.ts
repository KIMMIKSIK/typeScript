{
  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
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
  class SweetCoffeeMaker extends CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return {
        ...coffee,
        hasSugar: true,
      };
    }
  }
  // 다형성의 장점 하나로 묶어서 간편하게 반복문을 사용한다던지 사용이 용이하다.(부모와 자식들의 동일한 함수 api를 통해 각각의 구현사항을 몰라도 약속된 한가지 api를 호출하여 간편하게 사용가능)
  // 인터페이스 배열로 제공하는 메소드에 제한을 걸 수도 있다.
  const machines: ICoffeeMachine[] = [
    new CoffeeMaker(16),
    new CaffeeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
    new CoffeeMaker(16),
    new CaffeeLatteMachine(16, "1"),
    new SweetCoffeeMaker(16),
  ];

  const machine = CoffeeMaker.makeMachine(23);
  const latteMachine = new CaffeeLatteMachine(23, "SSSS");
  const sweetMachine = new SweetCoffeeMaker(23);
  machines.forEach((machine) => {
    console.log("----------------");
    machine.makeCoffee(1);
  });
}
