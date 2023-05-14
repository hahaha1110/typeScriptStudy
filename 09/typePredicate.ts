function isNumberOrStirng(value: unknown): value is number | string {
  return ["number", "string"].includes(typeof value);
}

function logValueIfExists(value: number | string | null | undefined) {
  if (isNumberOrStirng(value)) {
    value.toString();
  } else {
    console.log("value does not exist:", value);
  }
}
