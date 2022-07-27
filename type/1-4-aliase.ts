{
  /*
        Type Aliases
     */
  type Text = string;
  const name: Text = "ellie";
  type Num = number;
  type Student = {
    name: Text;
    age: number;
  };
  const student: Student = {
    name: "msik",
    age: 16,
  };
  //함수의 콜 시그니쳐 또한 타입 앨리어스라 할수 있을 것 같다.(약간 다름)리액트에서 함수를 props로 보낼때 어떻게 작동할지 미리 설계 가능하다
  type Add = (a: number, b: number) => number;
  //이렇게 하면 이후에 Add타입을 넣으면 그 함수인자의 2개의 매개변수와 반환값은 위에 적은것으로 추론됨

  /*
        String Literal Types
     */
  // 지정한 그 값만 들어갈 수 있음
  type Name = "name";
  type Json = "json";
  let json: Json = "json";
  type Boal = true;
  const isCat: Boal = true;
  //변수가 타입으로 사용될 수는 없음!!!
}
