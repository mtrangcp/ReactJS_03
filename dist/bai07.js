"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = "hello world";
let newStr = str.split("");
newStr.forEach((el, index) => {
    if (newStr.slice(index + 1).includes(el)) {
        let arr = newStr.slice(index + 1).filter(item => item !== el);
        newStr.splice(index + 1, newStr.length - index - 1, ...arr);
    }
});
str = newStr.join("");
console.log("Result: ", str);
//# sourceMappingURL=bai07.js.map