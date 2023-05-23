type MakeReadonly<T> = {
  readonly [K in keyof T]: T[K];
};

interface Species {
  genus: string;
  name: string;
}

type ReadonlySpecies = MakeReadonly<Species>;

// 다음과 같음
// {
//   readonly genus: string;
//   readonly name: string;
// }
