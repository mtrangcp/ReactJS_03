let num1 = document.getElementById("num1") as HTMLInputElement;
let num2 = document.getElementById("num2") as HTMLInputElement;

let sum = document.getElementById("sum") as HTMLButtonElement;
let sub = document.getElementById("sub") as HTMLButtonElement;
let multi = document.getElementById("multi") as HTMLButtonElement;
let div = document.getElementById("div") as HTMLButtonElement;
let expo = document.getElementById("expo") as HTMLButtonElement;
let squa = document.getElementById("squa") as HTMLButtonElement;
let facto = document.getElementById("facto") as HTMLButtonElement;

let result = document.getElementById("result") as HTMLSpanElement;

const addition = (a: number, b: number):number =>  a + b;
const subtraction = (a: number, b: number):number =>  a - b;
const multiplication  = (a: number, b: number):number =>  a * b;
const division  = (a: number, b: number):number => a / b;
const exponential = (a: number, b: number):number =>  Math.pow(a, b);
const squareRoot = (a: number):number =>  Math.sqrt(a);

const factorial = (a: number):number => {
    if (a === 0 || a === 1) return 1;
    return a * factorial(a - 1);
}

sum?.addEventListener("click", () => {
    let num1Value: number = +num1.value;
    let num2Value: number = +num2.value;
    result.textContent = `${addition( num1Value, num2Value)}`;
});

sub?.addEventListener("click", () => {
    let num1Value: number = +num1.value;
    let num2Value: number = +num2.value;
    result.textContent = `${subtraction( num1Value, num2Value)}`;
});

multi?.addEventListener("click", () => {
    let num1Value: number = +num1.value;
    let num2Value: number = +num2.value;
    result.textContent = `${multiplication(num1Value, num2Value)}`;
});

div?.addEventListener("click", () => {
    let num1Value: number = +num1.value;
    let num2Value: number = +num2.value;
    if (num2Value === 0) {
        result.textContent = "Ko chia cho 0";
    } else {
        result.textContent = `${division(num1Value, num2Value)}`;
    }
});

expo?.addEventListener("click", () => {
    let num1Value: number = +num1.value;
    let num2Value: number = +num2.value;
    result.textContent = `${exponential(num1Value, num2Value)}`;
});

squa?.addEventListener("click", () => {
    let num1Value: number = +num1.value;
    result.textContent = `${squareRoot(num1Value)}`;
});

facto?.addEventListener("click", () => {
    let num1Value: number = +num1.value;
    if (num1Value < 0 || !Number.isInteger(num1Value)) {
        result.textContent = "Ko tinh giai thua so am";
    } else {
        result.textContent = `${factorial(num1Value)}`;
    }
});
