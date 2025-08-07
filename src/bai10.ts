// function isUnique(word: string): boolean {
//   const charSet = new Set<string>();
//   for (let char of word) {
//     if (charSet.has(char)) return false;
//     charSet.add(char);
//   }
//   return true;
// }

// function findLongest(sentence: string): string {
//   const words = sentence.split(" ");
//   let longestWord = "";

//   for (let word of words) {
//     if (isUnique(word) && word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

function checkSubString(string: string): string {
  let words: string[] = string.split(" ");
  let result: string = "";
  words.forEach((word) => {
    let charSet = new Set(word);

    if (charSet.size === word.length) {
      if (charSet.size >= result.length) result = word;
      
    }

  });
    return result;

}

const sentence = "hello world apple banana orange pumpkin cucumber";
console.log(checkSubString(sentence)); 

