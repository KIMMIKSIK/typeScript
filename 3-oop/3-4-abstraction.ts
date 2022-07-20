{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 인터페이스는 나랑 의사소통하려면 이런 규약을 지켜야 한다고 명시해놓는 계약서 같은 아이
  interface ICoffeeMachine {
    makeCoffee(shots: number): CoffeeCup;
  }
  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(beans: number): void;
    clean(): void;
  }
  // 조금 더 다양한 기능을 제공하는 인터페이스 생성

  // 여러 인터페이스 구현 가능
  class CoffeeMaker implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT = 7;
    private coffeeBeans = 0;

    private constructor(coffeeBeans: number) {
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

  class AmateurUser {
    constructor(private machine: ICoffeeMachine) {}
    makeCoffee2() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
    }
  }
  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee2() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee);
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }
  const maker: CoffeeMaker = CoffeeMaker.makeMachine(32);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  amateur.makeCoffee2();

  //   const maker: CoffeeMaker = CoffeeMaker.makeMachine(32);
  //   maker.fillCoffeeBeans(32);
  //   maker.makeCoffee(2);
  //   // 1. 추상화는 한정자를 통해서 사용자가 이용하기 쉽게 한눈에 인터페이스를 파악할 수 있도록 하는 방법이있다.(한정자 이용 encapsulation과 유사)
  //   // 2. 인터페이스 사용
  //   const maker2: ICoffeeMachine = CoffeeMaker.makeMachine(32);
  //   // maker2.fillCoffeeBeans(32); // ICoffeeMachine타입에 없는 함수는 사용불가!
  //   maker2.makeCoffee(2);
  //   const maker3: CommercialCoffeeMaker = CoffeeMaker.makeMachine(32);
  //   maker3.fillCoffeeBeans(32);
  //   maker3.makeCoffee(2);
  //   // 인터페이스로 타입을 제한에서 받게되면 인터페이스에서 적용한 애들만 사용가능
}
