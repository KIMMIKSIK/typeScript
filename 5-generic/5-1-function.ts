{
  function checkNotNullBad(arg: number | null): number {
    if (arg === null) {
      throw new Error("not valid number");
    }
    return arg;
  }
  // 밑에 예시처럼 만들게 되면 결국 any타입을 반환하면서 타입이 보장되지 않아 안전하지 못함.
  function checkNotNullAnyBad(arg: any | null): any {
    if (arg === null) {
      throw new Error("not valid number");
    }
    return arg;
  }
  const result = checkNotNullAnyBad(123);

  function checkNotNull<T>(arg: T | null): T {
    if (arg === null) {
      throw new Error("not valid number");
    }
    return arg;
  }
  const number = checkNotNull(123);
  const boal: boolean = checkNotNull(true);
  const nul = checkNotNull(null);
  // 제네릭을 사용하면 사용하는 사람이 코딩을 하면서 타입을 결정함.
}
