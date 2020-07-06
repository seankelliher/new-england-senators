import {
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
} from "./senators.js";

const allSenators = [
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
];

//State variables.
const ctSenators = [];
const meSenators = [];
const maSenators = [];
const nhSenators = [];
const riSenators = [];
const vtSenators = [];

//Party variables.
const demSenators = [];
const indSenators = [];
const repSenators = [];

//Gender variables.
const femaleSenators = [];
const maleSenators = [];

//Function to loop through allSenators array.
allSenators.forEach(function (index) {

    //Create state's arrays.
    if (index.state === "Connecticut") {
        ctSenators.push(index.id);
    } else if (index.state === "Maine") {
        meSenators.push(index.id);
    } else if (index.state === "Massachusetts") {
        maSenators.push(index.id);
    } else if (index.state === "New Hampshire") {
        nhSenators.push(index.id);
    } else if (index.state === "Rhode Island") {
        riSenators.push(index.id);
    } else if (index.state === "Vermont") {
        vtSenators.push(index.id);
    }

    //Create party arrays.
    if (index.party === "Democrat") {
        demSenators.push(index.id);
    } else if (index.party === "Independent") {
        indSenators.push(index.id);
    } else if (index.party === "Republican") {
        repSenators.push(index.id);
    }

    //Create gender arrays.
    if (index.gender === "female") {
        femaleSenators.push(index.id);
    } else if (index.gender === "male") {
        maleSenators.push(index.id);
    }
});

export {
    ctSenators,
    meSenators,
    maSenators,
    nhSenators,
    riSenators,
    vtSenators,
    demSenators,
    indSenators,
    repSenators,
    femaleSenators,
    maleSenators
};