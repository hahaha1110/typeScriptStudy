interface AnumalVariants {
  alligator: boolean;
  baboon: number;
  cat: string;
}

type AnumalCounts2 = {
  [K in keyof Animals]: number;
};

// 다음과 같음
// {
//   alligator: number;
//   baboon: number;
//   cat: number;
// }
