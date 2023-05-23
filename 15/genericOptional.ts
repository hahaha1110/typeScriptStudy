type CheckAgainstNumber<T> = T extends number ? true : false;

// 타입 : false
type CheckString = CheckAgainstNumber<"parakeet">;

// 타입 true
type CheckNumber = CheckAgainstNumber<3>;
type CheckNumber2 = CheckAgainstNumber<number>;

// T가 함수인지 아닌지 판별
type CallableSetting<T> = T extends () => any ? T : () => T;

// 타입 : () => number[]
type GetNumbersSetting = CallableSetting<() => number[]>;

// 타입 : () => string
type StringSetting = CallableSetting<string>;
