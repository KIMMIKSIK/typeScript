type PositionType = {
  x: number;
  y: number;
};
interface PositionInterface {
  x: number;
  y: number;
}

interface PositionInterface {
  z: number;
}
// 확장기능 가능 인터페이스!

//object
const obj1: PositionType = {
  x: 1,
  y: 1,
};
const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 1,
};

// class 둘다 구현 가능

class Pos1 implements PositionType {
  x: number;
  y: number;
}
class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

// Extends
interface ZPositionInterface extends PositionInterface {
  // 상속을 통한 확장가능
  z: number;
}
type ZPositionType = PositionType & { z: number };

// 인터페이스는 확장, 머지기능이 있고 extends사용이 가능하다.
// 특정규격을 정해서 사용할 때는 interface를 사용하는 것이 좋다.
// 반대로 타입은 어떠한 데이터를 정하는 박스라고 생각하는게 좋음(어떤 데이터를 담고 있는지를 묘사하는 경우)데이터를 담는 목적

// type aliases 는 computed properties사용가능(유틸리티, 맵), 새로운 이름의 타입을 생성하는 것도 가능하다 (유니언 기능도 가능)

type Person = {
  name: string;
  age: number;
};

type Name = Person["name"];
