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

    constructor(
      coffeeBeans: number,
      private milk: MilkFrother,
      private sugar: SugarProvider
    ) {
      this.coffeeBeans = coffeeBeans;
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
      const coffee = this.extract(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milk.makeMilk(sugarAdded);
    }
  }
  interface MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup;
  }
  interface SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup;
  }
  // 싸구려 우유 거품기
  class CheapMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Steaming some milk..");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class FancyMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Fancy Steaming some milk..");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class ColdMilkSteamer implements MilkFrother {
    private steamMilk(): void {
      console.log("Cold Steaming some milk..");
    }
    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      };
    }
  }
  class NoMilk implements MilkFrother {
    makeMilk(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }
  // 설탕제조기
  class CandySugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar from candy");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }
  class SugarMixer implements SugarProvider {
    private getSugar() {
      console.log("Getting some sugar from jar!!!");
      return true;
    }
    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }
  class NoSugar implements SugarProvider {
    addSugar(cup: CoffeeCup): CoffeeCup {
      return cup;
    }
  }

  // constructor로 전달되는 인수의 타입을 클래스가 아니라 그 구현 대상의 인터페이스로 지정함 (디 커플링)
  //
  const cheapMilkMaker = new CheapMilkSteamer();
  const fancyMilkMaker = new FancyMilkSteamer();
  const coldMilkMaker = new ColdMilkSteamer();
  const noMilk = new NoMilk();
  // Sugar
  const candySugar = new CandySugarMixer();
  const sugar = new SugarMixer();
  const noSugar = new NoSugar();

  // 전과 다르게 타입을 인터페이스를 통해 지정하면서 인터페이스 규약에 맞는 다양한 부품들을 사용할 수 있다.
  const sweetCandyMachine = new CoffeeMaker(12, noMilk, candySugar);
  const sweetMachine = new CoffeeMaker(12, noMilk, sugar);

  //
  const latteMachine = new CoffeeMaker(12, cheapMilkMaker, noSugar);
  const coldLatteMachine = new CoffeeMaker(12, coldMilkMaker, sugar);
  //
  const sweetLatteMachine = new CoffeeMaker(12, cheapMilkMaker, candySugar);
}

// 상속대신 컴포지션이라는 말도 있음 하지만 composition을 사용하면
// 클래스들끼리 너무 긴밀하게 연결되어 제약이 생겨버리게 된다는 단점이 있다.(재사용성이 떨어짐)
// 컴포지션과 인터페이스를 활용한 성능 좋은 코딩가능!
// 1. 상속 - 컴포지션(클래스 기반) - 컴포지션(인터페이스기반)
