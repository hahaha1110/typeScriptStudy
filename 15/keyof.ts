interface BirdVariants {
  dove: string;
  eable: boolean;
}

type NullableBirdVariants = {
  [K in keyof BirdVariants]: BirdVariants[K] | null;
};

// 다음과 같음
// {
//   dove: string | null;
//   eable: boolean | null;
// }
