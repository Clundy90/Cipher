// You are given a positive integer number `n`, where it is less than 100 (excluded).

// For every number up to `n` (included):

// - Print `Fizz` if the number is divisible by `3`.
// - Print `Buzz` if the number is divisible by `5`.
// - Print `FizzBuzz` if the number is divisible by both `3` and `5`.
// - Print the number if it is not divisible by `3` or `5`.

// Print `Error` if unexpected happens and stop the execution.

//create an array
const ints = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
  42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
  61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
  80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
  99,
];

//start for loop and set conditions

for (let i = 0; i < ints.length; i++) {
  let num = ints[i];
  if (num < 1 || num >= 100) {
    console.error("Error");
  } else if (num % 5 === 0 && num % 3 === 0) {
    console.log("FizzBuzz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else {
    console.log(num);
  }
}

// function fizzBuzz(n) {
//   if (!Number.isInteger(n) || n < 1 || n >= 100) {
//     console.error("Error");
//     return;
//   }

//   for (let i = 1; i <= n; i++) {
//     const remainderBy3 = i % 3;
//     const remainderBy5 = i % 5;

//     if (remainderBy3 === 0 && remainderBy5 === 0) {
//       console.log("FizzBuzz");
//     } else if (remainderBy3 === 0) {
//       console.log("Fizz");
//     } else if (remainderBy5 === 0) {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// fizzBuzz(0);
// fizzBuzz(100);
// fizzBuzz(16);

// You are given a string `word` consisting of alphabetical characters.

// For each unique letter in the `word`:

// - Return the lower-case letter followed by the number of times it occurs in the `word`.

// Print `Error` if unexpected happens and stop the execution.

// Write a function `letterOccurrence` using JavaScript that solves the above problem and satisfies the conditions.

function letterCount(word) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  if (typeof word !== "string") {
    console.error("Error");
    return;
  }

  for (const letter of word) {
    if (!alphabet.includes(letter.toLowerCase())) {
      console.error("Error");
      return;
    }
  }

  let letterCounts = {};

  for (let letter of word) {
    let lowerCaseLetter = letter.toLowerCase();

    // If the letter is already in the dictionary, increment its count
    if (letterCounts[lowerCaseLetter] !== undefined) {
      letterCounts[lowerCaseLetter]++;
    } else {
      letterCounts[lowerCaseLetter] = 1;
    }
  }

  return letterCounts;
}

letterCount("Caesar42");
console.log(letterCount("Caesar"));
console.log(letterCount("AAbaBa"));
