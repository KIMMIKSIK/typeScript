{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    // class는 사용자가 만드는 타입 중 하나라고 생각하자
    // typescript는 클래스 몸체에 프로퍼티를 사전 정의하여야 한다.
    // 메모리 낭비를 줄이기 위한 static
    private static BEANS_GRAMM_PER_SHOT = 7;
    private coffeeBeans = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }
    getBeans() {
      console.log(this.coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough beans");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      return { shots, hasMilk: false };
    }
  }
  const maker = new CoffeeMachine(32);
  console.log(maker.makeCoffee(2));
  const maker3 = CoffeeMachine.makeMachine(32);
  console.log(maker3);
}
