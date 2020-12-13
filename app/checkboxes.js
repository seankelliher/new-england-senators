//Process checkboxes. Discover senators to display.
//Complicated module. Added notes to help.

import {
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
} from "./groups.js";

function processCheckboxes() {

    //Hide all figures on page.
    const figures = document.querySelectorAll("figure");
    figures.forEach(function (figure) {
        figure.style.display = "none";
    });

    //Retrieve form elements.
    const stateForm = document.getElementById("state-form");
    const partyForm = document.getElementById("party-form");
    const genderForm = document.getElementById("gender-form");

    //Gather checkboxes.
    const stateBoxes = stateForm.querySelectorAll("input[type='checkbox']");
    const partyBoxes = partyForm.querySelectorAll("input[type='checkbox']");
    const genderBoxes = genderForm.querySelectorAll("input[type='checkbox']");

    //Convert lists to "real" arrays.
    const stateBoxesArray = Array.from(stateBoxes);
    const partyBoxesArray = Array.from(partyBoxes);
    const genderBoxesArray = Array.from(genderBoxes);

    //"checked boxes" arrays (created below).
    const states = [];
    const parties = [];
    const genders = [];

    //Loop through "state" checkboxes. Add checked ids to states array.
    stateBoxesArray.forEach(function (box) {
        if (box.checked === true) {
            states.push(box.id);
        }
    });

    //Loop through "party" checkboxes. Add checked ids to parties array.
    partyBoxesArray.forEach(function (box) {
        if (box.checked === true) {
            parties.push(box.id);
        }
    });

    //Loop through "gender" checkboxes. Add checked ids to genders array.
    genderBoxesArray.forEach(function (box) {
        if (box.checked === true) {
            genders.push(box.id);
        }
    });

    //If user, checks nothing in a category...

    //If no "state" checkboxes checked. Add all ids to states array.
    if (states.length === 0) {
        stateBoxesArray.forEach(function (box) {
            states.push(box.id);
        });
    }

    //If no "party" checkboxes checked. Add all ids to parties array.
    if (parties.length === 0) {
        partyBoxesArray.forEach(function (box) {
            parties.push(box.id);
        });
    }

    //If no "gender" checkboxes checked. Add all ids to genders array.
    if (genders.length === 0) {
        genderBoxesArray.forEach(function (box) {
            genders.push(box.id);
        });
    }

    //We now have states, parties, genders arrays with ids of chk'd checkboxes.
    //Loop through these arrays. Get matching "group" array (imported above).
    //Add "group" array to arrays below.

    const ckSenatorsStates = [];
    const ckSenatorsParties = [];
    const ckSenatorsGenders = [];

    //For example: if we have: const state = [ma, vt].
    //We add maSenators and vtSenators to ckSenatorsStates.
    //ckSenatorsStates = [Ed Markey,Elizabeth Warren,Angus King,Bernie Sanders].

    //Create array of senators from checked states.
    states.forEach(function (state) {
        if (state === "ct") {
            ckSenatorsStates.push(...ctSenators);
        } else if (state === "me") {
            ckSenatorsStates.push(...meSenators);
        } else if (state === "ma") {
            ckSenatorsStates.push(...maSenators);
        } else if (state === "nh") {
            ckSenatorsStates.push(...nhSenators);
        } else if (state === "ri") {
            ckSenatorsStates.push(...riSenators);
        } else if (state === "vt") {
            ckSenatorsStates.push(...vtSenators);
        }
    });

    //Create array of senators from checked parties.
    parties.forEach(function (party) {
        if (party === "dem") {
            ckSenatorsParties.push(...demSenators);
        } else if (party === "ind") {
            ckSenatorsParties.push(...indSenators);
        } else if (party === "rep") {
            ckSenatorsParties.push(...repSenators);
        }
    });

    //Create array of senators from checked genders.
    genders.forEach(function (gender) {
        if (gender === "female") {
            ckSenatorsGenders.push(...femaleSenators);
        } else if (gender === "male") {
            ckSenatorsGenders.push(...maleSenators);
        }
    });

    //Get intersection of the results.
    const int1 = ckSenatorsStates.filter((x) => ckSenatorsParties.includes(x));
    const int2 = int1.filter((x) => ckSenatorsGenders.includes(x));

    //Retrieve "alert" message.
    const alert = document.getElementById("alert");

    //Make checked senators visible. No results returned, show alert.
    if (int2.length !== 0) {
        int2.forEach(function (int) {
            const checked = document.getElementById(int);
            checked.style.display = "block";
            alert.style.display = "none";
        });
    } else {
        alert.style.display = "block";
    }
}

export {processCheckboxes};