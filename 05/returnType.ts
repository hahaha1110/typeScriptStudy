function study(subject: string, studyHour: number): string {
  return `공부한 과목 : ${subject} , 공부시간 : ${studyHour}`;
}

type Study = (subject: string, studyHour: number) => string;

let stud2: Study;

stud2 = (subject, studyHour) => {
  return `공부한 과목 : ${subject} , 공부시간 : ${studyHour}`;
};

console.log(stud2("자바", 3));

console.log(study("타입스크립트", 1));

const studyArrow = (subject: string, studyHour: number): string => {
  return `공부한 과목 : ${subject} , 공부시간 : ${studyHour}`;
};
console.log(studyArrow("리액트", 2));

const song = ["Ditto", "attention", "ktich"];

// song : string
// index : number
song.forEach((song, index) => {
  console.log(`내가 좋아하는 노래 : ${index} : ${song} \n`);
});
