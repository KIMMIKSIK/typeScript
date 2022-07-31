Array;

{
  interface Api {
    <K>(type: K): void;
  }

  const king: Api = (type) => {};
  //타입정의시 콜 시그네쳐와 그냥 객체 형태의 구분필요
}
