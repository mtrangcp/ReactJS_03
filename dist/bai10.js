"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isUnique(word) {
    const charSet = new Set();
    for (let char of word) {
        if (charSet.has(char))
            return false;
        charSet.add(char);
    }
    return true;
}
function findLongestUniqueWord(sentence) {
    const words = sentence.split(" ");
    let longestWord = "";
    for (let word of words) {
        if (isUnique(word) && word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}
const sentence = "hello world apple banana orange pumpkin cucumber";
const result = findLongestUniqueWord(sentence);
console.log(result);
//# sourceMappingURL=bai10.js.map