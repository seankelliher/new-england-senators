//Watch the form, when a change occurs invoke these functions
document.querySelector("form").addEventListener("change", function() {
    "use strict";

    //Invoke the "hide figures" function
    senatorsFilter.hideFigures();

    //Invoke the "senators" and "parties" functions and get the intersection of the two results
    let intersection1 = senatorsFilter.getSenators().filter((x) => (senatorsFilter.getParties()).includes(x));

    //Invoke the "genders" function and get the intersection of the above result and this result
    let intersection2 = intersection1.filter((x) => senatorsFilter.getGenders().includes(x));

    //Display results - if no matches, display alert. If matches, display matches.
    let alert = document.getElementById("alert");
    let checkboxes = document.getElementsByTagName("input");
    let index;

    if (intersection2.length === 0) {
        alert.style.visibility = "visible";
    }   else if (intersection2.length !== 0) {
        for (index=0; index < intersection2.length; index+=1) {
            document.getElementById(intersection2[index]).style.display = "block";
            alert.style.visibility = "hidden";
        }
    }
});

let senatorsFilter = {

    //The "hide figures" function. This function hides all figures on the page. (The other functions reveal them.)
    hideFigures: function() {
        "use strict";

        let index;
        let figure = document.getElementsByTagName("figure");

        for (index=0; index < figure.length; index+=1) {
            figure[index].style.display = "none";
        }
    },

    //The "senators function". This function invokes the six "senators by state" functions and reveals which states' senators are selected (if no states are selected, it returns all senators)
    getSenators: function() {
        "use strict";

        //Invoke functions - gather Senators by State and combine arrays with spread operator
        let preSenators = [...senatorsFilter.getSenatorsCt(), ...senatorsFilter.getSenatorsMe(), ...senatorsFilter.getSenatorsMa(), ...senatorsFilter.getSenatorsNh(), ...senatorsFilter.getSenatorsRi(), ...senatorsFilter.getSenatorsVt()];

        //Ternary statement for Senators
        let all = document.getElementsByClassName("all");
        let result = (preSenators.length === 0) ? Array.from(all, (a) => a.id) : preSenators;
        return result;
    },

    //The "parties function". This function invokes the three "senators by party" functions and reveals which parties' senators are selected (if no parties are, it returns all senators)
    getParties: function() {
        "use strict";

        //Invoke functions - gather Senators by Party and combine arrays with spread operator
        let preParties = [...senatorsFilter.getSenatorsDem(), ...senatorsFilter.getSenatorsInd(), ...senatorsFilter.getSenatorsRep()];

        //Ternary statement for Parties
        let all = document.getElementsByClassName("all");
        let result = (preParties.length === 0) ? Array.from(all, (a) => a.id) : preParties;
        return result;
    },

    //The "genders function". This function invokes the two "senators by gender" functions and reveals which genders' senators are selected (if no genders are, it returns all senators)
    getGenders: function() {
        "use strict";

        //Invoke functions - gather Senators by Gender and combine arrays with spread operator
        let preGenders = [...senatorsFilter.getSenatorsFemale(), ...senatorsFilter.getSenatorsMale()];

        //Ternary statement for Genders
        let all = document.getElementsByClassName("all");
        let result = (preGenders.length === 0) ? Array.from(all, (a) => a.id) : preGenders;
        return result;
    },

    //The "senators function" for Connecticut. It gathers the senators from Connecticut, if Connecticut is selected. Otherwise, it returns an empty array.
    getSenatorsCt: function() {
        "use strict";

        let state = document.getElementById("connecticut");
        let senators = document.getElementsByClassName("ct");
        let result = (state.checked === true) ? Array.from(senators, (sens) => sens.id) : [];
        return result;
    },

    //The "senators function" for Maine. It gathers the senators from Maine, if Maine is selected. Otherwise, it returns an empty array.
    getSenatorsMe: function() {
        "use strict";

        let state = document.getElementById("maine");
        let senators = document.getElementsByClassName("me");
        let result = (state.checked === true) ? Array.from(senators, (sens) => sens.id) : [];
        return result;
    },

    //The "senators function" for Massachusetts. It gathers the senators from Massachusetts, if Massachusetts is selected. Otherwise, it returns an empty array.
    getSenatorsMa: function() {
        "use strict";

        let state = document.getElementById("massachusetts");
        let senators = document.getElementsByClassName("ma");
        let result = (state.checked === true) ? Array.from(senators, (sens) => sens.id) : [];
        return result;
    },

    //The "senators function" for New Hampshire. It gathers the senators from New Hampshire, if New Hampshire is selected. Otherwise, it returns an empty array.
    getSenatorsNh: function() {
        "use strict";

        let state = document.getElementById("new-hampshire");
        let senators = document.getElementsByClassName("nh");
        let result = (state.checked === true) ? Array.from(senators, (sens) => sens.id) : [];
        return result;
    },

    //The "senators function" for Rhode Island. It gathers the senators from Rhode Island, if Rhode Island is selected. Otherwise, it returns an empty array.
    getSenatorsRi: function() {
        "use strict";

        let state = document.getElementById("rhode-island");
        let senators = document.getElementsByClassName("ri");
        let result = (state.checked === true) ? Array.from(senators, (sens) => sens.id) : [];
        return result;
    },

    //The "senators function" for Vermont. It gathers the senators from Vermont, if Vermont is selected. Otherwise, it returns an empty array.
    getSenatorsVt: function() {
        "use strict";

        let state = document.getElementById("vermont");
        let senators = document.getElementsByClassName("vt");
        let result = (state.checked === true) ? Array.from(senators, (sens) => sens.id) : [];
        return result;
    },

    //The "parties function" for the Democratic Party. It gathers the senators from the Democratic Party, if the Democratic Party is selected. Otherwise, it returns an empty array.
    getSenatorsDem: function() {
        "use strict";

        let party = document.getElementById("democratic-party");
        let members = document.getElementsByClassName("democrat");
        let result = (party.checked === true) ? Array.from(members, (mems) => mems.id) : [];
        return result;
    },

    //The "parties function" for the Independent Party. It gathers the senators from the Independent Party, if the Independent Party is selected. Otherwise, it returns an empty array.
    getSenatorsInd: function() {
        "use strict";

        let party = document.getElementById("independent-party");
        let members = document.getElementsByClassName("independent");
        let result = (party.checked === true) ? Array.from(members, (mems) => mems.id) : [];
        return result;
    },

    //The "parties function" for the Republican Party. It gathers the senators from the Republican Party, if the Republican Party is selected. Otherwise, it returns an empty array.
    getSenatorsRep: function() {
        "use strict";

        let party = document.getElementById("republican-party");
        let members = document.getElementsByClassName("republican");
        let result = (party.checked === true) ? Array.from(members, (mems) => mems.id) : [];
        return result;
    },

    //The "genders function" for Female. It gathers the Female senators, if Female senators is selected. Otherwise, it returns an empty array.
    getSenatorsFemale: function() {
        "use strict";

        let gender = document.getElementById("gender-female");
        let group = document.getElementsByClassName("female");
        let result = (gender.checked === true) ? Array.from(group, (grp) => grp.id) : [];
        return result;
    },

    //The "genders function" for Male. It gathers the Male senators, if Male senators is selected. Otherwise, it returns an empty array.
    getSenatorsMale: function() {
        "use strict";

        let gender = document.getElementById("gender-male");
        let group = document.getElementsByClassName("male");
        let result = (gender.checked === true) ? Array.from(group, (grp) => grp.id) : [];
        return result;
    }

}; //close senatorsFilter