// either : a or b
interface Either<L, R> {
  // 인터페이스는 L,R을 모르지만 사용자가 구현할 예정
  left(): L;
  right: () => R;
}

class SimpleEither<L, R> implements Either<L, R> {
  constructor(private leftValue: L, private rightValue: R) {}
  left(): L {
    return this.leftValue;
  }
  right(): R {
    return this.rightValue;
  }
}
const either: Either<number, number> = new SimpleEither(4, 5);
either.left(); // 4
either.right(); // 5

const best = new SimpleEither({ name: "msik" }, "hello");
