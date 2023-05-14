// 타입 (text:string) => Promese<number>
async function lengthAfterSecond(text: string) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return text.length;
}

// 타입 (text:string) => Promese<number>
async function lengthImmediately(text: string) {
  return text.length;
}

async function givesPromiseString(): Promise<string> {
  return "done";
}

// async function givesString(): string {
//   return "done";
// }
