{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };
  // public 아무것도 안적으면 기본값
  // private 누구라도 클래스 외부에서는 접근 불가!
  // protected: 외부에서는 접근할 수 없지만 상속받은 자식클래스는 접근가능하게 설정가능하다.(여전히 외부에서는 접근불가)
  class CoffeeMachine {
    // class는 사용자가 만드는 타입 중 하나라고 생각하자
    // typescript는 클래스 몸체에 프로퍼티를 사전 정의하여야 한다.
    // 메모리 낭비를 줄이기 위한 static
    private static BEANS_GRAMM_PER_SHOT = 7;
    private coffeeBeans = 0;
    // 무언가 object를 만들 수 있는 함수를 제공한다면 누군가가 생성자를 통해 인스턴스를 생성하는 것을 금지하는 의미(makerMachine함수)라서 private를 설정해준다.
    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }
    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }
    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough beans");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      return { shots, hasMilk: false };
    }
  }
  const maker = CoffeeMachine.makeMachine(32);
  // maker.coffeeBeans = 3;
  // maker.coffeeBeans = -34; // invalid
  maker.fillCoffeeBeans(3);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("나이가 유효하지 않습니다.");
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, public lastName: string) {
      // 생성자안에 바로 한정자와 사용하면 this.*형식으로 멤버변수를 바로 생성
    }
  }
  const user = new User("Steve", "Jobs");
  console.log(user.fullName); // Steve Jobs
  console.log(user.fullName); // Steve Jobs
  user.age = 6;
}
