class BothLogger<OnInstance> {
  instanceLog(value: OnInstance) {
    console.log(value);
    return value;
  }

  static staticLog<OnStatic>(value: OnStatic) {
    // let from instanceLog : OnInstance;
    console.log(value);
    return value;
  }
}

const logger = new BothLogger<number[]>();
logger.instanceLog([1, 2, 3]); // 타입 number
BothLogger.staticLog([false, true]); // 유추된 OnStatic타입 인수 - boolean
BothLogger.staticLog<string>("test"); // 유추된 OnStatic타입 인수 - string

interface Quote<T = string> {
  // 기본값 설정안하면 기본 string
  value: T;
}

let explicit: Quote<number> = { value: 123 }; // 기본값 대신 명시적으로 number 선언
let implucut: Quote = {
  value: "Be yourself. The world worships the original.",
};

// let mismatch: Quote = { value: 123 };

function inTheEnd<First, Second, Third = number, Fourth = string>() {}
// function inTheMiddle<First, Second = boolean, Third = number, Fourth>() {}
