type Animals = "alligator " | "baboon" | "cat";

type AnumalCounts = {
  [K in Animals]: number;
};

// 다음과 같음
// {
//   alligator: number;
//   baboon: number;
//   cat: number;
// }
