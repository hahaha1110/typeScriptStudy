function defaultNameAndLog(nameMaybe: string | undefined) {
  const name = nameMaybe ?? "anonymous";
  console.log("From", nameMaybe, "to", name);
  return name;
}
