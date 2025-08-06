let firstName: string = "jonh";
let lastName: string = "doe";

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

let fullName = firstName +" "+ lastName;
console.log("FullName: ", fullName);