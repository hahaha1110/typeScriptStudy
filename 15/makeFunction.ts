type MakeAllMembersFunctions<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any ? T[K] : () => T[K];
};

type MemberFunctions = MakeAllMembersFunctions<{
  alreadyFunction: () => string;
  notYetFunction: number;
}>;

// 타입
// {
//   alreadyFunction: () => string;
//   notYetFunction: () => number;
// }
