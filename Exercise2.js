const friend = "BRUTUS";
const shiftValue =3;

const alphabet = "abcdefghijklmnopqrstuvwxyz";

//friend.findIndex(0);
//let firstLetter = friend.indexOf("BRUTUS", 0);
//const firstLetter = friend.indexOf(firstLetter.toLowerCase());
//is this also a valid answer?

const firstLetter = friend[0];
const index = alphabet.indexOf(firstLetter.toLowerCase());

//Question 1 Because JS (like many other programming languages) uses zero based indexing, which means first item in a string is 0 not 1. 

const indexTwo = index + shiftValue;
const encryptedFirstLetter = alphabet[indexTwo];


//Question 2 The modulus operator, %, helps us wrap around the alphabet. If we try to access an index beyond the length of our alphabet,
//  the modulus operator ensures that the result wraps around starting from 0. For instance, accessing the 28th position (which doesn't exist) would give us an index of 2, corresponding to the third letter, "c". 
// This operator ensures we always get a valid index within the bounds of the alphabet.


const alphabetLength = alphabet.length;
const newIndex = (index + shiftValue) % alphabetLength;

const encryptedMessage = "EUXWXV";
const teaserMessage = encryptedMessage.slice(0, 3);

//- The `slice` method extracts a section of a string and returns it as a new string without modifying the original string.
// the starting index (inclusive) and the ending index (exclusive).