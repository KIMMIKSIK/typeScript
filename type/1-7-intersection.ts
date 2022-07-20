{
  // intersection 은 and같은 개념 union은 or 느낌 : &

  type Student = {
    name: string;
    score: number;
  };
  type Worker = {
    empolyeeId: number;
    work: () => void;
  };
  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: "msik",
    score: 1,
    empolyeeId: 123,
    work: () => 3,
  });
}
