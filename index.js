//Invoke function to create elements
//Invoke function to monitor checkboxes.

import {createElements} from "./elements.js";
import {processCheckboxes} from "./checkboxes.js";

createElements();

document.querySelector("aside").addEventListener("change", function () {
    processCheckboxes();
});