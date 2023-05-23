// 제한자 추가
interface Environmentalist {
  area: string;
  name: string;
}

type ReadonlyEnvironmentalist = {
  readonly [K in keyof Environmentalist]: Environmentalist[K];
};

type OptionalReadonlyEnvironmentalist = {
  [K in keyof ReadonlyEnvironmentalist]?: ReadonlyEnvironmentalist[K];
};

// 제한자 제거
interface Conservationist {
  name: string;
  catchphrase?: string;
  readonly born: number;
  readonly died?: number;
}

type WritableConservarionist = {
  -readonly [K in keyof Conservationist]: Conservationist[K];
};

type RequiredWritableConservationist = {
  -readonly [K in keyof Conservationist]-?: Conservationist[K];
};
