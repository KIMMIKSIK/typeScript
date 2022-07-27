{
  interface Stack<T> {
    push(value: T): void;
    pop(): T;
    readonly size: number;
  }

  interface StackNode<K> {
    readonly value: K;
    readonly next?: StackNode<K>;
  }

  // readonly next: string[] 이런형태는 next프로퍼티를 리드온리로 만듬, 즉 객체의 주소값기준 얕은비교 변경막음
  // next: readonly string[] 이렇게 된다면 아예 next프로퍼티 현재값의 어떠한 변화도 다막음 값 변경 혹은 함수도 안통함

  // 타입과 interface는 타입스크립의 타입을 지정하는 2가지 방법이다.
  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;
    constructor(private capacity: number) {}
    get size() {
      return this._size;
    }

    push(value: T) {
      if (this.size === this.capacity) {
        throw new Error("Stack if full");
      }
      const node: StackNode<T> = {
        value,
        next: this.head,
      };
      this.head = node;
      this._size++;
    }
    // stric null check 만약 head null은 undefined가 아니기 때문에
    pop(): T {
      // null == undefined , null !== undefined
      if (this.head == undefined) {
        throw new Error("Stack is empty");
      }
      const node = this.head;
      this.head = node.next;
      this._size--;

      return node.value;
    }
  }
  const stack = new StackImpl(10);
  stack.push("msik 1");
  stack.push("bob 2");
  stack.push(true);
  stack.push(33);
  stack.push({ hello: "안녕" });
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
