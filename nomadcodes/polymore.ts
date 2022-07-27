type SuperPrint = {
  <T, M>(arr: T[], b: M): void;
};
const superPrint: SuperPrint = (arr) => {
  arr.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4], "dd");
superPrint([true, false, true, false, false], "sf");
superPrint([1, 2, true, "dsfd"], "하이");

// any와는 다르게 generic은 안정적인 코딩가능!
//'제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다.'

// function superP<T>(a: T[]) {
//   return a[0];
// }

// superP<number>([1, 2, 3, 4]); // 이렇듯 호출부에서도 확실히 명시가능 하지만 안써줘도 알아서 number임을 유추한다!
// superP([true, false, true, false, false]);
// superP([1, 2, true, "dsfd"]);

// type Player<E> = E;

// type nice = Player<number>;

type King = <T>(a: T, b: string) => string;

let king: King;

// a,b 인자가 없어도되는이유,,?
// type Kk = ()=>{};
// //뭔가를 리턴만 해주면됨,
// type Kk = ()=>void;
// //전부다 ok
