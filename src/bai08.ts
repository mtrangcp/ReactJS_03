const checkNumber = (a:any, b:any):boolean => {
    if (!isNaN(Number(a)) && !isNaN(Number(b))) return true;
    return false;
}

const sum = (a: number, b: number):number => +a + +b;
const sub = (a: number, b: number):number => +a - +b;
const mul = (a: number, b: number):number => +a * +b;
const div = (a: number, b: number): number => {
    if (b !== 0) return +a / +b;
    return NaN;
}

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
} else {
    console.log("Khong the ep kieu");
}
