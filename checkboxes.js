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

    //Hide all the figures.
    const figures = document.querySelectorAll("figure");
    figures.forEach(function (figure) {
        figure.style.display = "none";
    });

    //Retrieve the form elements.
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

    //Results of below function go here.
    const states = [];
    const parties = [];
    const genders = [];

    //Loop state checkboxes. Add checked boxes to states array.
    stateBoxesArray.forEach(function (box) {
        if (box.checked === true) {
            states.push(box.id);
        }
    });

    //Loop party checkboxes. Add checked boxes to parties array.
    partyBoxesArray.forEach(function (box) {
        if (box.checked === true) {
            parties.push(box.id);
        }
    });

    //Loop gender checkboxes. Add checked boxes to genders array.
    genderBoxesArray.forEach(function (box) {
        if (box.checked === true) {
            genders.push(box.id);
        }
    });

    //If no state checkboxes checked. All all ids to states array.
    if (states.length === 0) {
        stateBoxesArray.forEach(function (box) {
            states.push(box.id);
        });
    }

    //If no party checkboxes checked. All all ids to parties array.
    if (parties.length === 0) {
        partyBoxesArray.forEach(function (box) {
            parties.push(box.id);
        });
    }

    //If no gender checkboxes checked. All all ids to genders array.
    if (genders.length === 0) {
        genderBoxesArray.forEach(function (box) {
            genders.push(box.id);
        });
    }

    //Translate selected groups (ex, Vermont, Democrat, female) to Senators.
    //Arrays for selected states, parties, genders.
    const ckSenatorsStates = [];
    const ckSenatorsParties = [];
    const ckSenatorsGenders = [];

    //Create arrays for selected states.
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

    //Create arrays for selected parties.
    parties.forEach(function (party) {
        if (party === "dem") {
            ckSenatorsParties.push(...demSenators);
        } else if (party === "ind") {
            ckSenatorsParties.push(...indSenators);
        } else if (party === "rep") {
            ckSenatorsParties.push(...repSenators);
        }
    });

    //Create arrays for selected genders.
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

    //Make checked senators visible.
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