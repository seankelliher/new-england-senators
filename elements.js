import {
    blumenthal,
    murphy,
    collins,
    king,
    markey,
    warren,
    hassan,
    shaheen,
    reed,
    whitehouse,
    leahy,
    sanders
} from "./senators.js";

const allSenators = [
    blumenthal,
    murphy,
    collins,
    king,
    markey,
    warren,
    hassan,
    shaheen,
    reed,
    whitehouse,
    leahy,
    sanders
];

function createElements() {

    allSenators.forEach(function (index) {

        //Retrieve section element.
        const section = document.querySelector("section");

        //Create figure, figcaption, img elements.
        const figure = document.createElement("figure");
        const figcaption = document.createElement("figcaption");
        const span1 = document.createElement("span");
        const span2 = document.createElement("span");
        const span3 = document.createElement("span");
        const img = document.createElement("img");

        //Assign ids and content.
        figure.id = index.id;
        //figcaption.textContent = index.imageCaption();
        img.src = index.imageUrl();
        img.alt = index.imageAlt();
        span1.textContent = index.name;
        span2.textContent = index.state;
        span3.textContent = index.party;

        //Append elements.
        figcaption.appendChild(span1);
        figcaption.appendChild(span2);
        figcaption.appendChild(span3);
        figure.appendChild(img);
        figure.appendChild(figcaption);
        section.appendChild(figure);
    });
}

export {createElements};