interface QueryOptions {
  throwIfNotFound: boolean;
}

type QueryResult<Options extends QueryOptions> =
  Options["throwIfNotFound"] extends true ? string : string | undefined;

declare function retrieve<Options extends QueryOptions>(
  key: string,
  options?: Options
): Promise<QueryResult<Options>>;

async function typeReturn() {
  // 반환된 타입 : string | undefined
  await retrieve("Birute Galdikas"); // await 키워드는 async함수 안에서만 쓸수있어서 이렇게 바꿈..

  // 반환된 타입 : string | undefined
  await retrieve("Jane Goodall", { throwIfNotFound: Math.random() > 0.5 });

  // 반환된 타입 :string
  await retrieve("Dian Fossey", { throwIfNotFound: true });
}
typeReturn();
