
const emblemClue1 = "Eagle";
const emblemClue2 = "Laurel";
const emblemClue3 = 7;

let location = ""; // Location to be determined based on clues

if (emblemClue1 === "Eagle") {location = "Forum";}
if (emblemClue2 === "Lion") {location = "Colosseum";}
else if (location = "Villa")


//If emblemClue2 is "Laurel" AND the first location is "Forum", append " of Augustus" to the location.
if (emblemClue2 === "Laurel" && locationStart === "Forum")
{locationStart += " of Augustus";}

//If emblemClue2 is "Grapes" OR the first location is "Villa", append " of Pompey" to the location
else if (emblemClue2 === "Grapes" || location === "Villa")
{location += " of Pompey";}


switch (emblemClue3)
{
  case 7:
    location += " North";
    break;
  case 3:
    location += " South";
    break;
  case 9:
    location += " East";
    break;
  case 4:
    locationS += " West";
   break;
}

// The switch statement evaluates the value of emblemClue3 and appends the corresponding 
// direction to the location string based on the matched case.


//Using == (double equals) performs type coercion, meaning it tries to convert the operands to the same type 
// before making the comparison. On the other hand, === (triple equals) checks both the value and the type, ensuring
//  a stricter equality check. Using == can lead to unexpected results in certain situations due to type coercion.


// Final location output
console.log("The determined location is: " + location)