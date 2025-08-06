function isUnique(word: string): boolean {
  const charSet = new Set<string>();
  for (let char of word) {
    if (charSet.has(char)) return false;
    charSet.add(char);
  }
  return true;
}

function findLongestUniqueWord(sentence: string): string {
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

