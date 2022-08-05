type Video = {
  title: string;
  author: string;
};

type Optional<T> = {
  [P in keyof T]?: T[P]; // for...in 키들을 반복
};

type ReadOnly<T> = {
  readonly [P in keyof T]: T[P];
};

type VideoOptional = Optional<Video>;
const videoOp: VideoOptional = {
  title: "hi",
}; // 해당 내용을 전부 구현하지 않아도됨, 다만 추가하는 것은 안됨!

type Animal = {
  name: string;
  age: number;
};

const animal: Optional<Animal> = {
  name: "dog",
};

// type VideoOptional = {
//   title?: string;
//   author?: string;
// };

// type VideoReadOnly = {
//   readonly title?: string;
//   readonly author?: string;
// };

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};
const obj3: Nullable<Video> = {
  title: null,
  author: null,
};

type Proxy<T> = {
  get(): T;
  set(value: T): void;
};
type Proxify<T> = {
  [P in keyof T]: Proxy<T[P]>;
};
