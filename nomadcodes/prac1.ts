// 함수의 타입을 정리하는 이런 방식을 call signature라고 부른다.
type Add = (a: number, b: number) => number;

const add: Add = (n, c) => n + c;

//타입스크립트 오버로딩
// type Add = (a: number, b: number) => number 이것을 좀 더 길게 표현하면
// type AddOver = {
//     (a: number, b: number): number;
//   }; 오버로딩 때문에 존재하는 방법

// 이렇게 작성하면 AddOver 타입혹은 인터페이스를 타입으로 받은 수는 함수를 값으로 도출한다.
// 객체가 아닌 함수인 이유는 함수 자체가 js에서는 객체이기 때문이다.
type AddOver = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const addOver: AddOver = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

console.log(addOver(3, "dd"));
