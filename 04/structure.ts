type WithFirstName = {
  firstName: string;
};

type WithLastName = {
  lastName: string;
};

type name = {
  firstName?: string;
  lastName: string;
};

let myName: name = {
  lastName: "ha",
};
const hasBoth = {
  firstName: "hj",
  lastName: "ha",
};

let WithFirstName: WithFirstName = hasBoth;
let WithLastName: WithLastName = hasBoth;

// 초과속성검사 우회
const WithFullName2 = {
  firstName: "hj",
  lastName: "ha",
};

const WithFullNameButOK: WithFirstName = WithFullName2;

// 초과속성 검사
const WithFullName: WithFirstName = {
  firstName: "hj",
  //   lastName: "ha",
};
