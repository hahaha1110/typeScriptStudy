function greetComedian(name: unknown) {
  if (typeof name === "string") {
    console.log(`Announcing ${name.toUpperCase()}!`);
  }
}
greetComedian({ name: 1 });
