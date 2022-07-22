{
  interface Stack {
    push(value: string): void;
    pop(): string;
    readonly size: number;
  }
}
