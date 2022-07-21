{
    type CoffeeCup = {
      shots: number;
      hasMilk?: boolean;
      hasSugar?: boolean;
    };
  
    interface ICoffeeMachine {
      makeCoffee(shots: number): CoffeeCup;
    }
  // 추상클래스는 부모로부터 일정한 절차를 사용하다가 자식에서 특별히 달라지는 내용이 있을때 사용할 수 있다.
  // 사실 super를 먼저 호출하고 그값에 {...부모인스터스결과값,추가내용 }해줘도 되지만 굳이 부모를 호출하지 않아도 사용할 수 있는 방법이다.
  // 1. 추상클래스는 그 자체로는 인스턴스를 생성할 수 없다.
  // 2. 외부에서 자식에서 접근이 가능해야 하기 때문에 함수에는 private한정자는 사용할 수 없다.
  // 3. 인터페이스처럼 구현사항 적지 않고 선언만 해야 한다.
  // 4. 자식들마다 달라져야만 하는 내용을 오버라이딩 없이 자식에서 바로 기능이 구현가능했다.
  // 5. abstract 클라스의 자식이 내용을 구현하지 않으면 에러가 발생한다.  
    abstract class CoffeeMaker implements ICoffeeMachine {
      private static BEANS_GRAMM_PER_SHOT = 7;
      protected coffeeBeans = 0;
  
      constructor(coffeeBeans: number) {
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
      protected abstract extract(shots: number): CoffeeCup;
      clean(): void {
        console.log("cleaning the machine..🛸");
      }
  
      makeCoffee(shots: number): CoffeeCup {
        this.grindBeans(shots);
        this.preheat();
        return this.extract(shots);
      }
    }
  
    class CaffeeLatteMachine extends CoffeeMaker {
      // 만약자식에서 constructor를 따로 구성하는 경우 꼭 먼저 super()를 호출해야한다.
      constructor(beans: number, public readonly serialNumber: string) {
        super(beans);
      }
      private steamMilk(): void {
        console.log("steaming some milk....");
      }
      protected extract (shots:number):CoffeeCup{
        this.steamMilk();
        return {
            shots, hasMilk:true
        } 

      }
    }
    class SweetCoffeeMaker extends CoffeeMaker {
        protected extract (shots:number):CoffeeCup{
            return {
                shots, hasSugar:true
            } 
          }
      }
    
    const machines: ICoffeeMachine[] = [
      new CaffeeLatteMachine(16, "1"),
      new SweetCoffeeMaker(16),
      new CaffeeLatteMachine(16, "1"),
      new SweetCoffeeMaker(16),
    ];

    const latteMachine = new CaffeeLatteMachine(23, "SSSS");
    const sweetMachine = new SweetCoffeeMaker(23);
    machines.forEach((machine) => {
      console.log("----------------");
      machine.makeCoffee(1);
    });
  }
  