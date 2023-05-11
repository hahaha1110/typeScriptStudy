class Greeter {
  greet(name: string) {
    console.log(`${name}, do your stuff!`);
  }
}

new Greeter().greet("hahaha");
new Greeter(); // ok
// new Greeter().greet();

class GreeterConst {
  constructor(name: string) {
    console.log(`${name}, do your stuff!`);
  }
}

// new GreeterConst();
new GreeterConst("haha");

class WithProperty {
  myProperty = (input: boolean) => (input ? "Yes" : "No");
}
const instance = new WithProperty();
instance.myProperty(true);
// instance.myProperty(123);
