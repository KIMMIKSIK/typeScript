{
  // 여러가지의 관련된 상수값들을 한곳에 모아서 정리하게 해주는 타입 Enum ------숫자형과 문자타입만 가능하다.
  // 자바스크립트
  // 한번 선언하고 바뀌지 않는 고정값들은 보통 대문자로 표현
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  //이렇게 각각 다른 애들을 정리할 수도 있지만 아래와 같은 연관된 변수들을 선언할 수도 있음,,,,
  const MONDAY = 0;
  const TUESDAY = 0;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 3 });
  //freeze 객체 선언후 수정못하게 만드는 api
  const dayOfToday = DAYS_ENUM.MONDAY;
  // 비슷한 의미의 값들을 묶어서 정리하는 타입으로 자바스크립트로는 이런식으로 만들 수 있었음.

  // 타입스크립트
  // 따로 값을 지정하지 않으면 0부터 차례대로 값이 입력되며 0이아닌 다른 수로 시작하고 싶으면 Monday에 1이나 다른 숫자를 넣을 수 있다.
  // 숫자가 아닌 다른 값은 다음 값을 유추할 수 없으므로 각각 다 입력해주어야 한다.
  // 다른 언어와의 소통에서 enum을 사용하긴 했지만 보통은 그냥 union타입을 사용한다.
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday"; //(이렇게 enum을 안쓰고 유니온 타입으로도 사용이 가능하다.)
  enum Days {
    Monday,
    Tuesday,
    wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Tuesday);
  let day: Days = Days.Saturday;
  day = Days.Tuesday;
  console.log(day);

  // 아래와 같이 쓰면 타입으로 지정한 애들만 사용가능하게 변수를 선언할 수 있다.
  let dayOfWeek: DaysOfWeek = "Monday";
}
