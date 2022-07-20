{
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }
  // //Typescript✨
  // function jsFetchNum(id) {
  //   //code..
  //   //code..
  //   //code..
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }
  // function fetchNum(id: string): Promise<number> {
  //   //code..
  //   //code..
  //   //code..
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  //js=>ts✨
  //Optional parameter
  function printName(firstName: string, lastName?: string) {
    // lastName: string || undefined로 만약 쓰면 반드시 string, undefined중 하나는 전달해야함.
    console.log(firstName);
    console.log(lastName);
  }
  printName("steve", "jobs");
  printName("msik");

  // Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }

  // Rest parmeter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 6, 7));
}
