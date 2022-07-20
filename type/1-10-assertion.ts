{
  // type assertion
  function jsStrFunc(): any {
    return "hello";
    // 숫자를 리턴해도 assertion을 쓰면 에러는 일단 안뜨고 결과는 장담할 수 없다.undefined 혹은 에러발생
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 에러발생

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers!.push(2); // 무조건 값이 나온다는 표현 숫자배열이 나올것이다라는 의미 !
}
