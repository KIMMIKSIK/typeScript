// 함수의 타입을 정리하는 이런 방식을 call signature라고 부른다.(이런 틀을 만듬으로서 함수 표현식으로 함수를 만들면 더이상 일일히 타입을 지정하면서 만들 필요없다.)
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
  (a: number, b: string, c: number): string;
};

// 이런 형태의 오버로딩도 가능함!! 이때는 따로 구분되어 사용되는 인수에 따라 알아서 key가 구분됨 옵셔널 같은 효과를 줄 필요가 없다.
interface Ming<T> {
  key<G>(a: number, b: string): T;
}

const addOver: AddOver = (a, b, c?: number) => {
  if (typeof b === "string") return a;
  return a + b;
};

// console.log(addOver(3, "dd",3));

const kkk: Ming<number> = {
  key<G>(a: number, b: string) {
    return a;
  },
};

const a = [1, 2, 3, 4];
