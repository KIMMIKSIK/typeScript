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
  /*
        String Literal Types
     */
  // 지정한 그 값만 들어갈 수 있음
  type Name = "name";
  type Json = "json";
  let json: Json = "json";
  type Boal = true;
  const isCat: Boal = true;
}
