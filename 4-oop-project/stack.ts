{
  interface Stack {
    push(value: string): void;
    pop(): string;
    readonly size: number;
  }
  // 타입과 interface는 타입스크립의 타입을 지정하는 2가지 방법이다.
  class StackImpl implements Stack {
    private _size: number;
    get size() {
      return this._size;
    }
    push(v: string) {}
    pop(): string {
      return "";
    }
  }
}
