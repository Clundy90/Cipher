const guests = ["ANTONY", "CICERO", "CASSIUS", "CLEOPATRA"];

guests.unshift("BRUTUS");
// add to beginning of array

guests[0];
//check index to make sure brutus is at the beginning

guests.push("AUGUSTUS", "LUCIA");
//add new guests to end of array

//guests.includes ("SPARTACUS");
//false

const spartacusIndex = guests.indexOf("SPARTACUS");
//-1 or wasn't invited

guests.splice(2, 1);
//starting at index 2 and deleting 1 (CASSIUS) adding none

specialInvite = guests.slice(0, 3);
//making new variable to include only first 3 guests on list

const honoredGuests = guests.slice(0, 1); // Extracts honored guests.
const otherGuests = guests.slice(1); // Extracts the rest of the guests.
otherGuests.sort(); // Sorts the other guests.
const sortedGuests = honoredGuests.concat(otherGuests); // Combines both arrays.
