interface Employee {
  pay(): void;
}

class FullTimeEmployee implements Employee {
  pay(): void {
    console.log("full time!!");
  }
  workFullTime() {}
}
class PartTimeEmployee implements Employee {
  pay() {
    console.log("part time!!");
  }
  workPartTime() {}
}
// 세부적인 타입을 인자(인스턴스)로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 💩
// 타입을 더 광범위하게 만들어버리는 행위
function pay<T extends Employee>(employee: T): T {
  // 제네릭은 어떤 타입이든 들어올 수 있기 때문에 .pay()를 사용할 수 없는데 조건을 달 수 있음 constrains
  employee.pay();
  return employee;
}

const msik = new FullTimeEmployee();
const bob = new PartTimeEmployee();

msik.workFullTime();
bob.workPartTime();

const msikAfterPay = pay(msik);
const bobAfterPay = pay(bob);

const obj = {
  name: "msik",
  age: 20,
};
const obj2 = {
  animal: "dog",
};

console.log(getValue(obj, "name")); // msik
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // dog

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
// 타입 또한 제한적으로 그 상황에 딱 들어맞아야 한다.
// 만약 K의 경우 그냥 string 타입으로 하게 되면 getValue()를 호출하면서도 객체 범위에 없는 내용이 들어와도 빨간줄이 안그어지고
// string이라는게 무엇이 들어올지 모르기 때문에 obj[key]에서 에러가 발생한다.
