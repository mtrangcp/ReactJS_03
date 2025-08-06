const checkNumber = (a, b) => {
    if (!isNaN(Number(a)) && !isNaN(Number(b)))
        return true;
    return false;
};
const sum = (a, b) => +a + +b;
const sub = (a, b) => +a - +b;
const mul = (a, b) => +a * +b;
const div = (a, b) => {
    if (b !== 0)
        return +a / +b;
    return NaN;
};
let a = "8", b = "2";
if (checkNumber(a, b)) {
    //@ts-ignore
    console.log("Sum: ", sum(a, b));
    //@ts-ignore
    console.log("Sub: ", sub(a, b));
    //@ts-ignore
    console.log("Mul: ", mul(a, b));
    //@ts-ignore
    console.log("Div: ", div(a, b));
}
else {
    console.log("Khong the ep kieu");
}
export {};
//# sourceMappingURL=bai08.js.map