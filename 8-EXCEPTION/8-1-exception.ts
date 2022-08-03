// java : Exception
// javascript : Error
// 에러는 코딩하면서 예상가능한것, 예외는 예상불가한것
// 타입스크립트를 통해 코딩하면서 에러를 검출할 수 있다.

const array = new Array(10);
// Array생성자 함수 사용시 인자를 그냥 숫자 리터럴을 넣게 되면 배열의
// 크기로 지정하게 되고 ('ㅇㅇ','ㄴㅇㅎ')다른것을 넣으면 초기 값을 할당하게된다.
array.push("hi");
array.push(3);

console.log(array);

// ------------------------
// Error(Exception) handling: try -> catch -> finally
function readFile(fileName: string): string {
  if (fileName === "not exist!") {
    throw new Error(`file not exist! ${fileName}`);
  }
  return "file contents";
}

function closeFile(file: string) {
  //
}

const fileName = "file";

try {
  console.log(readFile(fileName));
} catch (e) {
  console.log("catched");
} finally {
  closeFile(fileName);
  console.log("finally!!");
}
// 에러를 잡았기 때문에 실행이 죽지는 않고 실행된다.
console.log(`!!!`);

// catch에서 함수의 리턴인 return 을 사용해도 finally는 실행할 수 있다.(무조건 실행 보장)
