const randomDecimal = Math.random();

const range = 33 - 3 + 1;

//add 1 to include 3-33 in the range 

const randomInRange = randomDecimal * range;

//Multiplying the randomDecimal (which is between 0 and 1) by the range scales the decimal to fall within the range of 0 to range. 
// This means we'll get a decimal number that's between 0 (inclusive) and the value of range (exclusive), thus fitting it within our desired range.

const randomInt = Math.floor(randomInRange); 

// use Math.floor to round down to the nearest whole number, ensuring we get an integer value within the range of 0 to (range - 1).

const shiftValue = randomInt + 3;

// Adding 3 shifts the range from 0-(range-1) to 3-33, which is our desired range for the shift value.

