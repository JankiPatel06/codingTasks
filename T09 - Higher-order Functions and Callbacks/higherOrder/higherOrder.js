/* Task 1: make a filter function to check if the words have 6 letters or not, 
it take two arugment array of words and fuction to check for 6 letters word.
result: show new array which have only 6 letters words*/

// defining array of 10 words
const words = [
    `abc`,
    `defg`,
    `hijklm`,
    `nopqrs`,
    `tuvwxy`,
    `zabc12`,
    `def`,
    `ghij`,
    `klmno`,
    `pqrst`,
];

// defining higher order filter function

function myFilterFunction(words, myMapperFilt) {
// defining  new array
    let sixLetterWords = [];

    for (let word of words) {
// calling function and checking boolean value for six letters word
        if (myMapperFilt(word) == true) {
//adding six letters words in sixLetterWords[]
            sixLetterWords.push(word);
        } else {
            continue;
        }
    }
    return sixLetterWords;
}

//defining function to check if word is 6 letter long or not.
function checkSixLetters(word) {
// checking if words have six letters or not
    if (word.length == 6) {
        return true;
    } else {
        return false;
    }
}
//calling myFilterFunction() and displaying the words which have six letters
let result = myFilterFunction(words, checkSixLetters);
console.log(result);
