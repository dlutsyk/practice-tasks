// https://devmates.co/home/problems/-Ltxci5yh99yp5sM7fRn

// Given a list of strings. For each string, return the shortest substring that only appears in that string.
// Input: [ "palantir", "pelantors","cheapair", "cheapoair"]
// Output: 
//   {
//     "palantir": "ti", # ti only appears in "palantir"
//     "pelantors": "s", # s only appears in "pelantors"
//     "cheapair": "pai" or "apa", # either substring only appears in "cheapair"
//     "cheapoair": "po" or "oa" # either substring only appears in cheapoair
//   }

// Solution

const input = ["palantir", "pelantors", "cheapair", "cheapoair"];
const result = {};

//
// Main loop
//

for (let i = 0; i < input.length; i++) {
    let firstPart = input.slice(0, i);
    let secondPart = input.slice(i + 1, input.length);
    let word = input[i];
    let restWords = (firstPart.concat(secondPart));
    let unique = isUnique(word, restWords);
    if (unique) {
        result[word] = unique;
    }
}

console.log(result);

//
// Help functions //
//

function isIncome(substr, str) {
    for (let i = 0; i < str.length; i++) {
        if (!!~str[i].indexOf(substr)) {
            return true;
        }
    }
    return false;
}

function isUnique(word, restWords) {
    for (let subLength = 0; subLength < word.length; subLength++) {
        for (let j = 0; j < word.length - subLength + 1; j++) {
          let subWord = word.substr(j, subLength);
          for (let k = 0; k < restWords.length; k++) {
              if (!isIncome(subWord, restWords)) {
                  return subWord;
              }
          }
        }
    }
}
