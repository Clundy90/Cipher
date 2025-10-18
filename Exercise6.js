const guests = {
  ANTONY: {
    title: "General",
    region: "Rome",
    dietaryPreference: "Vegetarian",
    pastGifts: ["Golden Laurel", "Chariot"],
  },
  CICERO: {
    title: "Orator",
    region: "Arpinum",
    dietaryPreference: "Omnivore",
    pastGifts: ["Scroll of Proverbs", "Quill"],
  },
};

//add brutus tp guest directory
guests.BRUTUS = {
  title: "Senator",
  region: "Rome",
  dietaryPreference: "Vegan",
  pastGifts: ["Silver Dagger", "Marble Bust"],
};

//Update CICERO's past gifts to include a "Golden Lyre".
//guests.CICERO.pastGifts += "Golden Lyre";
guests.CICERO.pastGifts.push("Golden Lyre");

// retrieve region of antony
const antonyRegion = guests.ANTONY.region;

//remove cicero from guest list
delete guests.CICERO;

//Assign ANTONY's profile to a new variable named generalProfile.
// Then, using this new variable, change the region of ANTONY to "Egypt".
const generalProfile = guests.ANTONY;
generalProfile.region = "Egypt";

//The region of antony in the original guests will be "Egypt" because objects in JS are reference types and
// changes made in a variable are reflected in the other and both point to same object in memory.
