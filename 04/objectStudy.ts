const hhj = {
  born: 1994,
  name: "hahaha",
};

hhj.born;
hhj["born"];

hhj.name;
hhj["name"];

// 객체 타입 선언
let student: {
  born: number;
  name: string;
};

// 할당방법
student = {
  born: 1994,
  name: "hhj",
};

// student = "hhj";

// 별칭
type studentAlias = {
  born: number;
  name: string;
};

// 별칭으로 타입할당
let student2: studentAlias;

student2 = {
  born: 1994,
  name: "hhj",
};
