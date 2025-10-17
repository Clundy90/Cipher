const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

let locationStart = ""; // Location to be determined based on clues

if (emblemClue1 === "Eagle") {
  locationStart = "Forum";
} else if (emblemClue2 === "Lion") {
  locationStart = "Colosseum";
} else locationStart = "Villa";

//If emblemClue2 is "Laurel" AND the first location is "Forum", append " of Augustus" to the location.

if (emblemClue2 === "Laurel" && locationStart === "Forum") {
  locationStart += " of Augustus";
} else if (emblemClue2 === "Grapes" || locationStart === "Villa") {
  locationStart += " of Pompey";
}

//If emblemClue2 is "Grapes" OR the first location is "Villa", append " of Pompey" to the location

// The switch statement evaluates the value of emblemClue3 and appends the corresponding direction to the location string based on the matched case.

switch (emblemClue3) {
  case 7:
    locationStart += " North";
    break;
  case 3:
    locationStart += " South";
    break;
  case 9:
    locationStart += " East";
    break;
  case 4:
    locationStart += " West";
    break;
}

// //Using == (double equals) performs type coercion, meaning it tries to convert the operands to the same type
// // before making the comparison. On the other hand, === (triple equals) checks both the value and the type, ensuring
// //  a stricter equality check. Using == can lead to unexpected results in certain situations due to type coercion.

// Final location output
console.log("The determined location is: " + locationStart);
