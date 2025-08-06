let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let sum = document.getElementById("sum");
let sub = document.getElementById("sub");
let multi = document.getElementById("multi");
let div = document.getElementById("div");
let expo = document.getElementById("expo");
let squa = document.getElementById("squa");
let facto = document.getElementById("facto");
let result = document.getElementById("result");
const addition = (a, b) => a + b;
const subtraction = (a, b) => a - b;
const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;
const exponential = (a, b) => Math.pow(a, b);
const squareRoot = (a) => Math.sqrt(a);
const factorial = (a) => {
  if (a === 0 || a === 1) return 1;
  return a * factorial(a - 1);
};
sum?.addEventListener("click", () => {
  let num1Value = +num1.value;
  let num2Value = +num2.value;
  result.textContent = `${addition(num1Value, num2Value)}`;
});
sub?.addEventListener("click", () => {
  let num1Value = +num1.value;
  let num2Value = +num2.value;
  result.textContent = `${subtraction(num1Value, num2Value)}`;
});
multi?.addEventListener("click", () => {
  let num1Value = +num1.value;
  let num2Value = +num2.value;
  result.textContent = `${multiplication(num1Value, num2Value)}`;
});
div?.addEventListener("click", () => {
  let num1Value = +num1.value;
  let num2Value = +num2.value;
  if (num2Value === 0) {
    result.textContent = "Ko chia cho 0";
  } else {
    result.textContent = `${division(num1Value, num2Value)}`;
  }
});
expo?.addEventListener("click", () => {
  let num1Value = +num1.value;
  let num2Value = +num2.value;
  result.textContent = `${exponential(num1Value, num2Value)}`;
});
squa?.addEventListener("click", () => {
  let num1Value = +num1.value;
  result.textContent = `${squareRoot(num1Value)}`;
});
facto?.addEventListener("click", () => {
  let num1Value = +num1.value;
  if (num1Value < 0 || !Number.isInteger(num1Value)) {
    result.textContent = "Ko tinh giai thua so am";
  } else {
    result.textContent = `${factorial(num1Value)}`;
  }
});
// export {};
//# sourceMappingURL=bai09.js.map
