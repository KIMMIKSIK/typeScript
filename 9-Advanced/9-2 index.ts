{
  const obj = {
    name: "msik",
  };

  obj.name;
  obj["name"];

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };
  type Name = Animal["name"]; // string
  const text: Name = "hello";
  type Gender = Animal["gender"]; // 'male' | 'female'
  type Keys = keyof Animal; // Animal에 있는 모든 키를 유니온 타입으로 가지게됨
  const key: Keys = "gender";
  type Person = {
    name: string;
    gender: Animal["gender"];
  };
  const person: Person = {
    name: "msik",
    gender: "male",
  };
}
