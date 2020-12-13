//Invoke function to create elements
//Invoke function to monitor checkboxes.

import {createElements} from "./app/elements.js";
import {processCheckboxes} from "./app/checkboxes.js";

createElements();

document.querySelector("aside").addEventListener("change", function () {
    processCheckboxes();
});