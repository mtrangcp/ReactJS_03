"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = "jonh";
let lastName = "doe";
let firstNames = firstName.split("");
let lastNames = lastName.split("");
if (firstNames[0] && firstNames[0] !== firstNames[0]?.toUpperCase()) {
    firstNames[0] = firstNames[0]?.toUpperCase();
    firstName = firstNames.join("");
}
if (lastNames[0] && lastNames[0] !== lastNames[0]?.toUpperCase()) {
    lastNames[0] = lastNames[0]?.toUpperCase();
    lastName = lastNames.join("");
}
let fullName = firstName + " " + lastName;
console.log("FullName: ", fullName);
//# sourceMappingURL=bai05.js.map