//Process "senator" objects to create "group" arrays.
//For example, combine king and sanders to create "independents" array.

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

//Put "senators" objects in allSenators array.
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

//"state" arrays (created below).
const ctSenators = [];
const meSenators = [];
const maSenators = [];
const nhSenators = [];
const riSenators = [];
const vtSenators = [];

//"party" arrays (created below).
const demSenators = [];
const indSenators = [];
const repSenators = [];

//"gender" arrays (created below).
const femaleSenators = [];
const maleSenators = [];

//Loop through allSenators array and "senator" objects within it.
allSenators.forEach(function (index) {

    //Create "state" arrays.
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

    //Create "party" arrays.
    if (index.party === "Democrat") {
        demSenators.push(index.id);
    } else if (index.party === "Independent") {
        indSenators.push(index.id);
    } else if (index.party === "Republican") {
        repSenators.push(index.id);
    }

    //Create "gender" arrays.
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