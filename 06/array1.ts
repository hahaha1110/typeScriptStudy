const warriors = ["Artemisia", "Boudica", 1];

warriors.push("Zenobia"); // string 타입 추가 OK
warriors.push(3); // 숫자 ok

// warriors.push(true);

let createString: () => string[]; // string배열 타입을 반환하는 함수

let stringCreators: (() => string)[]; // 각각의 string을 반환하는 함수의 배열
