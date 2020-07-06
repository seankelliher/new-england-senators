//Create one object for each senator.

//Constructor function.
function Senator(id, name, state, party, gender) {
    this.id = id;
    this.name = name;
    this.state = state;
    this.party = party;
    this.gender = gender;
}

Senator.prototype.imageUrl = function () {
    return `images/${this.id}-240.png`;
};

Senator.prototype.imageAlt = function () {
    return `portrait of Senator ${this.name}`;
};

//Invoke constructor function.
const blumenthal = new Senator(
    "richard-blumenthal",
    "Richard Blumenthal",
    "Connecticut",
    "Democrat",
    "male"
);

const murphy = new Senator(
    "chris-murphy",
    "Chris Murphy",
    "Connecticut",
    "Democrat",
    "male"
);

const collins = new Senator(
    "susan-collins",
    "Susan Collins",
    "Maine",
    "Republican",
    "female"
);

const king = new Senator(
    "angus-king",
    "Angus King",
    "Maine",
    "Independent",
    "male"
);

const markey = new Senator(
    "ed-markey",
    "Ed Markey ",
    "Massachusetts",
    "Democrat",
    "male"
);

const warren = new Senator(
    "elizabeth-warren",
    "Elizabeth Warren",
    "Massachusetts",
    "Democrat",
    "female"
);

const hassan = new Senator(
    "maggie-hassan",
    "Maggie Hassan",
    "New Hampshire",
    "Democrat",
    "female"
);

const shaheen = new Senator(
    "jeanne-shaheen",
    "Jeanne Shaheen",
    "New Hampshire",
    "Democrat",
    "female"
);

const reed = new Senator(
    "jack-reed",
    "Jack Reed",
    "Rhode Island",
    "Democrat",
    "male"
);

const whitehouse = new Senator(
    "sheldon-whitehouse",
    "Sheldon Whitehouse",
    "Rhode Island",
    "Democrat",
    "male"
);

const leahy = new Senator(
    "patrick-leahy",
    "Patrick Leahy",
    "Vermont",
    "Democrat",
    "male"
);

const sanders = new Senator(
    "bernie-sanders",
    "Bernie Sanders",
    "Vermont",
    "Independent",
    "male"
);

export {
    blumenthal,
    murphy,
    collins,
    king,
    markey,
    warren,
    hassan,
    shaheen,
    reed,
    whitehouse,
    leahy,
    sanders
};