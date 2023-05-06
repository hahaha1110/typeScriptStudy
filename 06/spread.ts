const fruits = ["apple", "melon", "orange"];
const numbers = [10, 20, 30];

function myLunch(location: string, ...numbers: number[]) {
  for (const fruit of fruits) {
    console.log(`오늘 나는 ${location}에서 점심으로 ${fruit}을 먹었습니다.`);
  }
}

myLunch("집", ...numbers);
const conjoined = [...fruits, ...numbers];
// console.log(conjoined);

const pairMutable: [number, string] = [1157, "Tomoe"];
pairMutable[0] = 1247;

const readonluTuple = [1157, "Tomoe"] as const;
// readonluTuple[0] = 1247;
