{
  //기존 javascript
  // let,const es6
  //var, let, const
  // * primitive : number, string, boolean, bigint, symbol, null, undefined
  // * object: function, array......

  //number
  const num: number = 0.1;
  // string
  const str: string = "hello";
  // boolean
  const boal: boolean = true;
  // undefined
  // let name:undefined; 가능은 하지만 보통 이렇게는 안씀
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  //null
  // let person:null; 이렇게 잘 안씀
  //값이 있거나 없거나 결론이 명확하다면 null이 undefined보다 문맥적으로 맞음.
  let person2: string | null;

  //💩 unknown 타입이 없는 자바스크립트와 연동되는 타입스크립트 특성상 자스 라이브러리 활용등에 결과값의 타입을 모르는 경우가 있어서 존재함, 잘안쓰는것이 좋음
  // 그래도 any와 다른점은 다른 any,unknown외의 타입의 변수에 할당이 불가하며 any타입과 다르게 프로퍼티 접근이 불가하여 좀 더 안전한 코딩이 가능하다.
  let notSure: unknown;
  notSure = "he";
  notSure = true;
  // api 응답 결과값의 타입을 모른다면 unknown처리가 좋다
  // 예시)
  let a: unknown;

  if (typeof a === "number") {
    a = a + 123;
  }
  if (typeof a === "string") {
    console.log(a.length);
  }

  //💩 any 이것도 안쓰는게 좋음, unknown은 겸손하게 뭔지 잘 모르겠어느낌, any는 그냥 다담을수 있어의 느낌
  let anything: any = 0;
  anything = "hello";
  // void 리턴값이 없는 함수에서 사용
  // 변수 선언에 사용하면 undefined밖에 안되서 변수에 쓰는 경우 거의 없음
  function print(): void {
    console.log("hello");
  }
  // never
  // 1.while(true){}무한 반복이되서 return이 생길 수 없는 경우
  // 2. 에러 핸들링을 통해 프로그램이 종료되고 리턴값이 생길 수 없는 경우
  // 💩변수에 선언하는 경우 없음!
  function errorProblem(message: string): never {
    throw new Error(message);
  }

  // 💩object 자바스크립트 기준 모든 object타입 할당 가능
  let obj: object;
}
