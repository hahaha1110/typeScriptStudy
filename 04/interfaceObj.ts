// 유추
const human =
  Math.random() > 0.5
    ? { name: "hhj", age: 30 }
    : { name: "hahaha", job: "student" };

// 아래 다 접근가능
human.name;
human.age;
human.job;

// 명시
type humanWithAge = {
  name: string;
  age: number;
  type: "age";
};

type humanWithJob = {
  name: string;
  job: string;
  type: "job";
};

type human2 = humanWithAge | humanWithJob;

const human2: human2 =
  Math.random() > 0.5
    ? { name: "hhj", age: 30, type: "age" }
    : { name: "hahaha", job: "student", type: "job" };

// 판별된 유니언
if (human2.type === "age") {
  console.log(`This type is humanWithAge , age : ${human2.age}`);
} else {
  console.log(`This type is humanWithJob , job : ${human2.job}`);
}
// human2.age;
// human2.job;
if ("age" in human2) {
  // 객체 타입 내로잉
  human2.age;
} else {
  human2.job;
}

// if(human2.age){

// }

human2.name;
// human2.age;
// human2.job;
