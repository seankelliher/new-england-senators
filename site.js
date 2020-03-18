//Global variable.
let senators;

//Monitor the form. When "change" occurs, invoke these functions.
document.querySelector("form").addEventListener("change", function () {
    "use strict";

    senators.hideFigures();
    senators.reviewBoxes();
});

senFl = {

    //The "hide figures" function. This function hides all figures on the page.
    //The other functions reveal them.
    hideFigures: function () {
        "use strict";

        const figure = document.getElementsByTagName("figure");
        const figureArray = Array.from(figure);

        //For Each loop
        figureArray.forEach(function (fig) {
            fig.style.display = "none";
        });

        //Invoke the "get results" function.
        senFl.getResults();
    },

    getResults: function () {
        "use strict";

        //Invoke the "senators" and "parties" functions.
        //Get the intersection of the two results
        const int1 = senFl.getSen().filter((x) => (senFl.getPty()).includes(x));

        //Invoke the "genders" function.
        //Get the intersection of the above result and this result.
        const int2 = int1.filter((x) => senFl.getGenders().includes(x));

        //Display results - if no matches, display alert.
        const alert = document.getElementById("alert");

        if (int2.length === 0) {
            alert.style.visibility = "visible";
        } else if (int2.length !== 0) {
            int2.forEach(function (int) {
                document.getElementById(int).style.display = "block";
                alert.style.visibility = "hidden";
            });
        }
    },

    //The "senators function" invokes the six "senators by state" functions.
    ///It reveals which states' senators are selected.
    //If no states are selected, it returns all senators.
    getSen: function () {
        "use strict";

        //Gather Senators by State and combine arrays with spread operator.
        const preSenators = [
            ...senFl.getSenCt(),
            ...senFl.getSenMe(),
            ...senFl.getSenMa(),
            ...senFl.getSenNh(),
            ...senFl.getSenRi(),
            ...senFl.getSenVt()
        ];

        //Ternary statement for Senators
        const all = document.getElementsByClassName("all");
        const result = (
            (preSenators.length === 0)
            ? Array.from(all, (a) => a.id)
            : preSenators
        );
        return result;
    },

    //The "parties function" invokes the three "senators by party" functions.
    //It reveals which parties' senators are selected.
    //If no parties are selected, it returns all senators.
    getPty: function () {
        "use strict";

        //Gather Senators by Party and combine arrays with spread operator.
        const preParties = [
            ...senFl.getSenDem(),
            ...senFl.getSenInd(),
            ...senFl.getSenRep()
        ];

        //Ternary statement for Parties
        const all = document.getElementsByClassName("all");
        const result = (
            (preParties.length === 0)
            ? Array.from(all, (a) => a.id)
            : preParties
        );
        return result;
    },

    //The "genders function" invokes the two "senators by gender" functions.
    //It and reveals which genders' senators are selected.
    //If no genders are selected, it returns all senators.
    getGenders: function () {
        "use strict";

        //Gather Senators by Gender and combine arrays with spread operator
        const preGenders = [
            ...senFl.getSenFemale(),
            ...senFl.getSenMale()
        ];

        //Ternary statement for Genders
        const all = document.getElementsByClassName("all");
        const result = (
            (preGenders.length === 0)
            ? Array.from(all, (a) => a.id)
            : preGenders
        );
        return result;
    },

    //The "senators function" for Connecticut gathers the senators from CT.
    //If Connecticut is not selected, it returns an empty array.
    getSenCt: function () {
        "use strict";

        const state = document.getElementById("connecticut");
        const senators = document.getElementsByClassName("ct");
        const result = (
            (state.checked === true)
            ? Array.from(senators, (sens) => sens.id)
            : []
        );
        return result;
    },

    //The "senators function" for Maine gathers the senators from ME.
    //If Maine is not selected, it returns an empty array.
    getSenMe: function () {
        "use strict";

        const state = document.getElementById("maine");
        const senators = document.getElementsByClassName("me");
        const result = (
            (state.checked === true)
            ? Array.from(senators, (sens) => sens.id)
            : []
        );
        return result;
    },

    //The "senators function" for Massachusetts gathers the senators from MA.
    //If Massachusetts is not selected, it returns an empty array.
    getSenMa: function () {
        "use strict";

        const state = document.getElementById("massachusetts");
        const senators = document.getElementsByClassName("ma");
        const result = (
            (state.checked === true)
            ? Array.from(senators, (sens) => sens.id)
            : []
        );
        return result;
    },
    //The "senators function" for New Hampshire gathers the senators from NH.
    //If New Hampshire is not selected, it returns an empty array.
    getSenNh: function () {
        "use strict";

        const state = document.getElementById("new-hampshire");
        const senators = document.getElementsByClassName("nh");
        const result = (
            (state.checked === true)
            ? Array.from(senators, (sens) => sens.id)
            : []
        );
        return result;
    },

    //The "senators function" for Rhode Island gathers the senators from RI.
    //If Rhode Island is not selected, it returns an empty array.
    getSenRi: function () {
        "use strict";

        const state = document.getElementById("rhode-island");
        const senators = document.getElementsByClassName("ri");
        const result = (
            (state.checked === true)
            ? Array.from(senators, (sens) => sens.id)
            : []
        );
        return result;
    },

    //The "senators function" for Vermont gathers the senators from VT.
    //If Vermont is not selected, it returns an empty array.
    getSenVt: function () {
        "use strict";

        const state = document.getElementById("vermont");
        const senators = document.getElementsByClassName("vt");
        const result = (
            (state.checked === true)
            ? Array.from(senators, (sens) => sens.id)
            : []
        );
        return result;
    },

    //The "parties function" for Democratic Party gathers Democrats.
    //If Democratic Party is not selected, it returns an empty array.
    getSenDem: function () {
        "use strict";

        const party = document.getElementById("democratic-party");
        const members = document.getElementsByClassName("democrat");
        const result = (
            (party.checked === true)
            ? Array.from(members, (mems) => mems.id)
            : []
        );
        return result;
    },

    //The "parties function" for Independent Party gathers Independents.
    //If Independent Partyis not selected, it returns an empty array.
    getSenInd: function () {
        "use strict";

        const party = document.getElementById("independent-party");
        const members = document.getElementsByClassName("independent");
        const result = (
            (party.checked === true)
            ? Array.from(members, (mems) => mems.id)
            : []
        );
        return result;
    },

    //The "parties function" for Republican Party gathers Republicians.
    //If Republican Party is not selected, it returns an empty array.
    getSenRep: function () {
        "use strict";

        const party = document.getElementById("republican-party");
        const members = document.getElementsByClassName("republican");
        const result = (
            (party.checked === true)
            ? Array.from(members, (mems) => mems.id)
            : []
        );
        return result;
    },

    //The "genders function" for Female gathers Female Senators.
    //If Female is not selected, it returns an empty array.
    getSenFemale: function () {
        "use strict";

        const gender = document.getElementById("gender-female");
        const group = document.getElementsByClassName("female");
        const result = (
            (gender.checked === true)
            ? Array.from(group, (grp) => grp.id)
            : []
        );
        return result;
    },

    //The "genders function" for Male gathers Male Senators.
    //If Male is not selected, it returns an empty array.
    getSenMale: function () {
        "use strict";

        const gender = document.getElementById("gender-male");
        const group = document.getElementsByClassName("male");
        const result = (
            (gender.checked === true)
            ? Array.from(group, (grp) => grp.id)
            : []
        );
        return result;
    }

}; //close senFl