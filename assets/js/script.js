"use strict";

import { QUOTES } from "../data/data.js";

function init() {
    displayQuote();
}

function displayQuote() {
    const $quote = document.querySelector("#quote");
    const quote = getRandomQuote();

    $quote.innerHTML = `<h2>
                            ${quote}
                        </h2>`
}

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    return QUOTES[randomIndex];
}

init();