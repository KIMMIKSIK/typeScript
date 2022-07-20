{
  // Array
  const fruits: string[] = ["tomato", "banana"];
  const scroes: Array<number> = [1, 2, 3];
  function printArray(fruits: readonly string[]) {
    // readonly는 string[]형식의 데이터 선언만을 인정
  }
  // 💩 Tuple 서로 다른 타입을 가질 수 있는 배열! => interface, type, alias, class를 대신 사용하는게 좋음 튜플 가독성 no good
  let student: [string, number]; // 이후 배열에 추가 삭제는 막을 수 없음, 초기에만 타입효과 유효!
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  // 이렇게 사용할 수도 있음 다만 왠만하면 튜플 사용은 자제한다.
  const [name, age] = student;
}
