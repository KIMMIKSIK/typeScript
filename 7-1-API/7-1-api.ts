Array;

{
  interface Api {
    <K>(type: K): void;
  }

  const king: Api = (type) => {};
}
