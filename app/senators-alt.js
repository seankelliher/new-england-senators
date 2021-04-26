//Alternative to using senators.js.
//File creates an object for each Senator using Object.create.
//More code than constructor function, and repeated functions.
//But no JSLint warnings.

const sample = {
    id: "",
    name: "",
    state: "",
    party: "",
    gender: ""
};

const blumenthal = Object.create(sample);
blumenthal.id = "richard-blumenthal";
blumenthal.name = "Richard Blumenthal";
blumenthal.state = "Connecticut";
blumenthal.party = "Democrat";
blumenthal.gender = "male";
blumenthal.imageUrl = function () {
    return `images/${blumenthal.id}-240x260.jpg`;
};
blumenthal.imageAlt = function () {
    return `portrait of Senator ${blumenthal.name}`;
};

const murphy = Object.create(sample);
murphy.id = "chris-murphy";
murphy.name = "Chris Murphy";
murphy.state = "Connecticut";
murphy.party = "Democrat";
murphy.gender = "male";
murphy.imageUrl = function () {
    return `images/${murphy.id}-240x260.jpg`;
};
murphy.imageAlt = function () {
    return `portrait of Senator ${murphy.name}`;
};

const collins = Object.create(sample);
collins.id = "susan-collins";
collins.name = "Susan Collins";
collins.state = "Maine";
collins.party = "Republican";
collins.gender = "female";
collins.imageUrl = function () {
    return `images/${collins.id}-240x260.jpg`;
};
collins.imageAlt = function () {
    return `portrait of Senator ${collins.name}`;
};

const king = Object.create(sample);
king.id = "angus-king";
king.name = "Angus King";
king.state = "Maine";
king.party = "Independent";
king.gender = "male";
king.imageUrl = function () {
    return `images/${king.id}-240x260.jpg`;
};
king.imageAlt = function () {
    return `portrait of Senator ${king.name}`;
};

const markey = Object.create(sample);
markey.id = "ed-markey";
markey.name = "Ed Markey";
markey.state = "Massachusetts";
markey.party = "Democrat";
markey.gender = "male";
markey.imageUrl = function () {
    return `images/${markey.id}-240x260.jpg`;
};
markey.imageAlt = function () {
    return `portrait of Senator ${markey.name}`;
};

const warren = Object.create(sample);
warren.id = "elizabeth-warren";
warren.name = "Elizabeth Warren";
warren.state = "Massachusetts";
warren.party = "Democrat";
warren.gender = "female";
warren.imageUrl = function () {
    return `images/${warren.id}-240x260.jpg`;
};
warren.imageAlt = function () {
    return `portrait of Senator ${warren.name}`;
};

const hassan = Object.create(sample);
hassan.id = "maggie-hassan";
hassan.name = "Maggie Hassan";
hassan.state = "New Hampshire";
hassan.party = "Democrat";
hassan.gender = "female";
hassan.imageUrl = function () {
    return `images/${hassan.id}-240x260.jpg`;
};
hassan.imageAlt = function () {
    return `portrait of Senator ${hassan.name}`;
};

const shaheen = Object.create(sample);
shaheen.id = "jeanne-shaheen";
shaheen.name = "Jeanne Shaheen";
shaheen.state = "New Hampshire";
shaheen.party = "Democrat";
shaheen.gender = "female";
shaheen.imageUrl = function () {
    return `images/${shaheen.id}-240x260.jpg`;
};
shaheen.imageAlt = function () {
    return `portrait of Senator ${shaheen.name}`;
};

const reed = Object.create(sample);
reed.id = "jack-reed";
reed.name = "Jack Reed";
reed.state = "Rhode Island";
reed.party = "Democrat";
reed.gender = "male";
reed.imageUrl = function () {
    return `images/${reed.id}-240x260.jpg`;
};
reed.imageAlt = function () {
    return `portrait of Senator ${reed.name}`;
};

const whitehouse = Object.create(sample);
whitehouse.id = "sheldon-whitehouse";
whitehouse.name = "Sheldon Whitehouse";
whitehouse.state = "Rhode Island";
whitehouse.party = "Democrat";
whitehouse.gender = "male";
whitehouse.imageUrl = function () {
    return `images/${whitehouse.id}-240x260.jpg`;
};
whitehouse.imageAlt = function () {
    return `portrait of Senator ${whitehouse.name}`;
};

const leahy = Object.create(sample);
leahy.id = "patrick-leahy";
leahy.name = "Patrick Leahy";
leahy.state = "Vermont";
leahy.party = "Democrat";
leahy.gender = "male";
leahy.imageUrl = function () {
    return `images/${leahy.id}-240x260.jpg`;
};
leahy.imageAlt = function () {
    return `portrait of Senator ${leahy.name}`;
};

const sanders = Object.create(sample);
sanders.id = "bernie-sanders";
sanders.name = "Bernie Sanders";
sanders.state = "Vermont";
sanders.party = "Independent";
sanders.gender = "male";
sanders.imageUrl = function () {
    return `images/${sanders.id}-240x260.jpg`;
};
sanders.imageAlt = function () {
    return `portrait of Senator ${sanders.name}`;
};

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