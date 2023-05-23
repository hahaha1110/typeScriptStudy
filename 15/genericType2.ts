interface GenusData {
  family: string;
  name: string;
}

type MakeOptional<T> = {
  [K in keyof T]?: T[K];
};

// GenusData의 기본값 위에 모든 {overrides}를 구조분해 할당 함
function createGenusData(overrides?: MakeOptional<GenusData>): GenusData {
  return {
    family: "unknown",
    name: "unknown",
    ...overrides,
  };
}
