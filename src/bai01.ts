const show = (name: string, age: number, job: string) => {
    return `Ten: ${name} - Tuoi: ${age} - CV: ${job}`;
}

let userName: string = "minh trang";
let age: number = 10;
let job: string = "hoc sinh";

console.log(show(userName, age, job));