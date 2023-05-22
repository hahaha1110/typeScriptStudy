"use strict";
function defaultNameAndLog(nameMaybe) {
    const name = nameMaybe !== null && nameMaybe !== void 0 ? nameMaybe : "anonymous";
    console.log("From", nameMaybe, "to", name);
    return name;
}
