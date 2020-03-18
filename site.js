//Global variable.
let senators;

//Monitor the form. When "change" occurs, invoke these functions.
document.querySelector("form").addEventListener("change", function () {
    "use strict";

    senators.hideFigures();
    senators.reviewBoxes();
});

senators = {

    //Hide all figures on the page.
    //Following functions will reveal them.
    hideFigures: function () {
        "use strict";

        const figure = document.getElementsByTagName("figure");
        const figureArray = Array.from(figure);

        figureArray.forEach(function (fig) {
            fig.style.display = "none";
        });
    },

    reviewBoxes: function () {
        "use strict";

        //Gather checkboxes. Convert to "real" array.
        const boxes = document.querySelectorAll("input[type='checkbox']");
        const boxesArray = Array.from(boxes);

        //Results of below function go here.
        const states = [];
        const parties = [];
        const genders = [];

        //Loop through "boxes" array. Add chk'd items to above category arrays.
        boxesArray.forEach(function (box) {
            if (box.checked === true) {

                if (box.className === "state") {
                    states.push(box.id);
                } else if (box.className === "party") {
                    parties.push(box.id);
                } else if (box.className === "gender") {
                    genders.push(box.id);
                }
            }
        });

        //If no "state" boxes checked, add all options to "states" array.
        if (states.length === 0) {
            const allStates = document.querySelectorAll(".state");
            const allStatesA = Array.from(allStates);

            allStatesA.forEach(function (as) {
                states.push(as.id);
            });
        }

        //If no "party" boxes checked, add all options to "parties" array.
        if (parties.length === 0) {
            const allParties = document.querySelectorAll(".party");
            const allPartiesA = Array.from(allParties);

            allPartiesA.forEach(function (ap) {
                parties.push(ap.id);
            });
        }

        //If no "gender" boxes checked, add all options to "genders" array.
        if (genders.length === 0) {
            const allGenders = document.querySelectorAll(".gender");
            const allGendersA = Array.from(allGenders);

            allGendersA.forEach(function (ag) {
                genders.push(ag.id);
            });
        }

        //Results of below functions go here.
        const senatorStates = [];
        const senatorParties = [];
        const senatorGenders = [];

        //Get actual Senators  - by state.
        states.forEach(function (state) {

            const stateGroup = document.getElementsByClassName(state);
            const stateGroupA = Array.from(stateGroup);

            stateGroupA.forEach(function (member) {

                senatorStates.push(member.id);
            });
        });

        //Get actual Senators  - by party.
        parties.forEach(function (party) {

            const partyGroup = document.getElementsByClassName(party);
            const partyGroupA = Array.from(partyGroup);

            partyGroupA.forEach(function (member) {

                senatorParties.push(member.id);
            });
        });

        //Get actual Senators  - by gender.
        genders.forEach(function (gender) {

            const genderGroup = document.getElementsByClassName(gender);
            const genderGroupA = Array.from(genderGroup);

            genderGroupA.forEach(function (member) {

                senatorGenders.push(member.id);
            });
        });

        //Get intersection of the results.
        const int1 = senatorStates.filter((x) => senatorParties.includes(x));
        const int2 = int1.filter((x) => senatorGenders.includes(x));

        //If results, invoke function to display them, hide message.
        //If no results, invoke function to display message.
        if (int2.length !== 0) {
            senators.displayResults(int2);
            senators.hideMessage();
        } else if (int2.length === 0) {
            senators.showMessage();
        }
    },

    displayResults: function (i2) {
        "use strict";

        //Receive results. Loop through them. Display them.
        i2.forEach(function (i) {
            document.getElementById(i).style.display = "block";
        });

    },

    hideMessage: function () {
        "use strict";

        const alert = document.getElementById("alert");
        const containsShow = alert.classList.contains("show");

        //If #alert contains class "show", remove it. Add class "hide".
        if (containsShow === true) {
            alert.classList.remove("show");
            alert.classList.add("hide");
        }
    },

    showMessage: function () {
        "use strict";

        const alert = document.getElementById("alert");
        const containsHide = alert.classList.contains("hide");

        //If #alert contains class "hide", remove it. Add class "show".
        if (containsHide === true) {
            alert.classList.remove("hide");
            alert.classList.add("show");
        }
    }

}; //close senators