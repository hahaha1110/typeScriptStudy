interface HasBothFucntionTypes {
  property: () => string;
  method(): string;
}

const hasBoth: HasBothFucntionTypes = {
  property: () => "Hellow",
  method() {
    return "World!";
  },
};

console.log(hasBoth.property);
console.log(hasBoth.method);
