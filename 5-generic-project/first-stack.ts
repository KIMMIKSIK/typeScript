{
  class makeStack {
    private static fullWords: string = "";
    private static count: string = "";

    protected resultAdd(word: string): string {
      makeStack.fullWords += `${word} `;
      return makeStack.fullWords;
    }
    protected count(word: string) {
      makeStack.count += `${word.length}`;
      return makeStack.count;
    }
    protected resultOut() {
      const length = makeStack.fullWords.length;

      makeStack.fullWords = makeStack.fullWords.slice(
        0,
        length - (parseInt(makeStack.count[makeStack.count.length - 1]) + 1)
      );
      makeStack.count = makeStack.count.slice(0, -1);
      console.log(makeStack.count);
      return makeStack.fullWords;
    }
  }
  class AdjStack extends makeStack {
    push(word: string) {
      const stack = super.resultAdd(word);
      const count = super.count(word);
      console.log(stack);
    }

    pull() {
      const stack = super.resultOut();
      console.log(stack);
    }
  }

  const adjStack = new AdjStack();
  adjStack.push("안녕");
  adjStack.push("하이");
  adjStack.push("오케이");
  adjStack.push("안녕하십니까!!");
  adjStack.pull();
  adjStack.pull();
  adjStack.pull();
  adjStack.push("오케이");
  adjStack.push("안녕하십니까!!");
  adjStack.pull();
}
