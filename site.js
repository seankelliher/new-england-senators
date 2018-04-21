//Watch the form, when a change occurs invoke the "hide figures" function, which then invokes the other functions
let senatorsFilter;

document.querySelector("form").addEventListener("change", function () {
    "use strict";

    //Invoke the "hide figures" function
    senatorsFilter.hideFigures();

});

senatorsFilter = {

    //The "hide figures" function. This function hides all figures on the page. (The other functions reveal them.)
    hideFigures: function () {
        "use strict";

        const figure = document.getElementsByTagName("figure");
        const figureArray = Array.from(figure);

        //For Each loop
        figureArray.forEach(function (fig) {
            fig.style.display = "none";
        });

        //Invoke the "get results" function
        senatorsFilter.getResults();
    },

    getResults: function () {
        "use strict";

        //Invoke the "senators" and "parties" functions and get the intersection of the two results
        const intersection1 = senatorsFilter.getSenators().filter((x) => (senatorsFilter.getParties()).includes(x));

        //Invoke the "genders" function and get the intersection of the above result and this result
        const intersection2 = intersection1.filter((x) => senatorsFilter.getGenders().includes(x));

        //Display results - if no matches, display alert. If matches, display matches.
        const alert = document.getElementById("alert");

        if (intersection2.length === 0) {
            alert.style.visibility = "visible";
        } else if (intersection2.length !== 0) {
            intersection2.forEach(function (int) {
                document.getElementById(int).style.display = "block";
                alert.style.visibility = "hidden";
            });
        }
    },

    //The "senators function". This function invokes the six "senators by state" functions and reveals which states' senators are selected (if no states are selected, it returns all senators)
    getSenators: function () {
        "use strict";

        //Invoke functions - gather Senators by State and combine arrays with spread operator
        const preSenators = [...senatorsFilter.getSenatorsCt(), ...senatorsFilter.getSenatorsMe(), ...senatorsFilter.getSenatorsMa(), ...senatorsFilter.getSenatorsNh(), ...senatorsFilter.getSenatorsRi(), ...senatorsFilter.getSenatorsVt()];

        //Ternary statement for Senators
        const all = document.getElementsByClassName("all");
        const result = (preSenators.length === 0)
            ? Array.from(all, (a) => a.id)
            : preSenators;
        return result;
    },

    //The "parties function". This function invokes the three "senators by party" functions and reveals which parties' senators are selected (if no parties are selected, it returns all senators)
    getParties: function () {
        "use strict";

        //Invoke functions - gather Senators by Party and combine arrays with spread operator
        const preParties = [...senatorsFilter.getSenatorsDem(), ...senatorsFilter.getSenatorsInd(), ...senatorsFilter.getSenatorsRep()];

        //Ternary statement for Parties
        const all = document.getElementsByClassName("all");
        const result = (preParties.length === 0)
            ? Array.from(all, (a) => a.id)
            : preParties;
        return result;
    },

    //The "genders function". This function invokes the two "senators by gender" functions and reveals which genders' senators are selected (if no genders are selected, it returns all senators)
    getGenders: function () {
        "use strict";

        //Invoke functions - gather Senators by Gender and combine arrays with spread operator
        const preGenders = [...senatorsFilter.getSenatorsFemale(), ...senatorsFilter.getSenatorsMale()];

        //Ternary statement for Genders
        const all = document.getElementsByClassName("all");
        const result = (preGenders.length === 0)
            ? Array.from(all, (a) => a.id)
            : preGenders;
        return result;
    },

    //The "senators function" for Connecticut. It gathers the senators from Connecticut, if Connecticut is selected. Otherwise, it returns an empty array.
    getSenatorsCt: function () {
        "use strict";

        const state = document.getElementById("connecticut");
        const senators = document.getElementsByClassName("ct");
        const result = (state.checked === true)
            ? Array.from(senators, (sens) => sens.id)
            : [];
        return result;
    },

    //The "senators function" for Maine. It gathers the senators from Maine, if Maine is selected. Otherwise, it returns an empty array.
    getSenatorsMe: function () {
        "use strict";

        const state = document.getElementById("maine");
        const senators = document.getElementsByClassName("me");
        const result = (state.checked === true)
            ? Array.from(senators, (sens) => sens.id)
            : [];
        return result;
    },

    //The "senators function" for Massachusetts. It gathers the senators from Massachusetts, if Massachusetts is selected. Otherwise, it returns an empty array.
    getSenatorsMa: function () {
        "use strict";

        const state = document.getElementById("massachusetts");
        const senators = document.getElementsByClassName("ma");
        const result = (state.checked === true)
            ? Array.from(senators, (sens) => sens.id)
            : [];
        return result;
    },

    //The "senators function" for New Hampshire. It gathers the senators from New Hampshire, if New Hampshire is selected. Otherwise, it returns an empty array.
    getSenatorsNh: function () {
        "use strict";

        const state = document.getElementById("new-hampshire");
        const senators = document.getElementsByClassName("nh");
        const result = (state.checked === true)
            ? Array.from(senators, (sens) => sens.id)
            : [];
        return result;
    },

    //The "senators function" for Rhode Island. It gathers the senators from Rhode Island, if Rhode Island is selected. Otherwise, it returns an empty array.
    getSenatorsRi: function () {
        "use strict";

        const state = document.getElementById("rhode-island");
        const senators = document.getElementsByClassName("ri");
        const result = (state.checked === true)
            ? Array.from(senators, (sens) => sens.id)
            : [];
        return result;
    },

    //The "senators function" for Vermont. It gathers the senators from Vermont, if Vermont is selected. Otherwise, it returns an empty array.
    getSenatorsVt: function () {
        "use strict";

        const state = document.getElementById("vermont");
        const senators = document.getElementsByClassName("vt");
        const result = (state.checked === true)
            ? Array.from(senators, (sens) => sens.id)
            : [];
        return result;
    },

    //The "parties function" for the Democratic Party. It gathers the senators from the Democratic Party, if the Democratic Party is selected. Otherwise, it returns an empty array.
    getSenatorsDem: function () {
        "use strict";

        const party = document.getElementById("democratic-party");
        const members = document.getElementsByClassName("democrat");
        const result = (party.checked === true)
            ? Array.from(members, (mems) => mems.id)
            : [];
        return result;
    },

    //The "parties function" for the Independent Party. It gathers the senators from the Independent Party, if the Independent Party is selected. Otherwise, it returns an empty array.
    getSenatorsInd: function () {
        "use strict";

        const party = document.getElementById("independent-party");
        const members = document.getElementsByClassName("independent");
        const result = (party.checked === true)
            ? Array.from(members, (mems) => mems.id)
            : [];
        return result;
    },

    //The "parties function" for the Republican Party. It gathers the senators from the Republican Party, if the Republican Party is selected. Otherwise, it returns an empty array.
    getSenatorsRep: function () {
        "use strict";

        const party = document.getElementById("republican-party");
        const members = document.getElementsByClassName("republican");
        const result = (party.checked === true)
            ? Array.from(members, (mems) => mems.id)
            : [];
        return result;
    },

    //The "genders function" for Female. It gathers the Female senators, if Female senators is selected. Otherwise, it returns an empty array.
    getSenatorsFemale: function () {
        "use strict";

        const gender = document.getElementById("gender-female");
        const group = document.getElementsByClassName("female");
        const result = (gender.checked === true)
            ? Array.from(group, (grp) => grp.id)
            : [];
        return result;
    },

    //The "genders function" for Male. It gathers the Male senators, if Male senators is selected. Otherwise, it returns an empty array.
    getSenatorsMale: function () {
        "use strict";

        const gender = document.getElementById("gender-male");
        const group = document.getElementsByClassName("male");
        const result = (gender.checked === true)
            ? Array.from(group, (grp) => grp.id)
            : [];
        return result;
    }

}; //close senatorsFilter