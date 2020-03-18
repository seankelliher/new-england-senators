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

}; //close senFl