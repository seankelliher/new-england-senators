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