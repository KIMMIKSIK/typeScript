{
  // Type inference
  // 편하긴 하지만 개발자들의 혼란을 막기위해서 명시적으로 적는게 좋음 단 바로 아래에 text같은 한눈에 보이는 것은 괜찮다.
  let text = "hello";
  // text = 1; 이건 불가하다.
  function printMan(message: any) {
    console.log(message);
  }
  printMan("hello");
  printMan(1);
}
